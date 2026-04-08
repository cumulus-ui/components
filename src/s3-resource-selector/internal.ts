import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { S3ResourceSelectorProps } from './interfaces.js';
import type { BreadcrumbGroupProps } from '../breadcrumb-group/interfaces.js';

import '../input/index.js';
import '../button/index.js';
import '../modal/index.js';
import '../breadcrumb-group/index.js';
import '../table/index.js';
import '../header/index.js';
import '../alert/index.js';

const hostStyles = css`:host { display: block; }`;

type BrowseLevel = 'buckets' | 'objects' | 'versions';

export class CsS3ResourceSelectorInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  resource: S3ResourceSelectorProps.Resource = { uri: '' };

  @property({ type: String })
  inputAriaDescribedby?: string;

  @property({ type: String })
  inputPlaceholder?: string;

  @property({ type: Boolean })
  invalid = false;

  @property({ type: String })
  viewHref?: string;

  @property({ attribute: false })
  selectableItemsTypes?: ReadonlyArray<S3ResourceSelectorProps.SelectableItems>;

  @property({ attribute: false })
  bucketsVisibleColumns?: ReadonlyArray<string>;

  @property({ attribute: false })
  objectsVisibleColumns?: ReadonlyArray<string>;

  @property({ attribute: false })
  versionsVisibleColumns?: ReadonlyArray<string>;

  @property({ attribute: false })
  bucketsIsItemDisabled?: (item: S3ResourceSelectorProps.Bucket) => boolean;

  @property({ attribute: false })
  objectsIsItemDisabled?: (item: S3ResourceSelectorProps.Object) => boolean;

  @property({ attribute: false })
  versionsIsItemDisabled?: (item: S3ResourceSelectorProps.Version) => boolean;

  @property({ attribute: false })
  fetchBuckets?: () => Promise<ReadonlyArray<S3ResourceSelectorProps.Bucket>>;

  @property({ attribute: false })
  fetchObjects?: (bucketName: string, pathPrefix: string) => Promise<ReadonlyArray<S3ResourceSelectorProps.Object>>;

  @property({ attribute: false })
  fetchVersions?: (bucketName: string, pathPrefix: string) => Promise<ReadonlyArray<S3ResourceSelectorProps.Version>>;

  @property({ attribute: false })
  i18nStrings?: S3ResourceSelectorProps.I18nStrings;

  @state() private _modalOpen = false;
  @state() private _uri = '';
  @state() private _currentLevel: BrowseLevel = 'buckets';
  @state() private _currentPath: string[] = [];
  @state() private _items: ReadonlyArray<Record<string, unknown>> = [];
  @state() private _loading = false;
  @state() private _selectedItems: ReadonlyArray<Record<string, unknown>> = [];

  override willUpdate(changed: Map<PropertyKey, unknown>): void {
    if (changed.has('resource')) {
      this._uri = this.resource.uri;
    }
  }

  focus(): void {
    const input = this.shadowRoot?.querySelector<HTMLElement>('cs-input');
    input?.focus();
  }

  private _onUriChange = (e: CustomEvent<{ value: string }>): void => {
    e.stopPropagation();
    const uri = e.detail.value;
    this._uri = uri;
    const detail: S3ResourceSelectorProps.ChangeDetail = {
      resource: { uri },
    };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'change', detail);
  };

  private _openModal = (): void => {
    this._modalOpen = true;
    this._currentLevel = 'buckets';
    this._currentPath = [];
    this._items = [];
    this._selectedItems = [];
    this._loadBuckets();
  };

  private _closeModal = (): void => {
    this._modalOpen = false;
    this._items = [];
    this._selectedItems = [];
  };

  private _confirmSelection = (): void => {
    if (this._selectedItems.length === 0) return;

    const selected = this._selectedItems[0];
    let uri = '';

    if (this._currentLevel === 'buckets') {
      uri = `s3://${(selected as S3ResourceSelectorProps.Bucket).Name}`;
    } else if (this._currentLevel === 'objects') {
      const bucket = this._currentPath[0];
      const key = (selected as S3ResourceSelectorProps.Object).Key ?? '';
      uri = `s3://${bucket}/${key}`;
    } else if (this._currentLevel === 'versions') {
      const bucket = this._currentPath[0];
      const prefix = this._currentPath.slice(1).join('/');
      uri = `s3://${bucket}/${prefix}`;
    }

    this._uri = uri;
    this._modalOpen = false;

    const detail: S3ResourceSelectorProps.ChangeDetail = { resource: { uri } };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'change', detail);
  };

  private async _loadBuckets(): Promise<void> {
    if (!this.fetchBuckets) {
      this._items = [];
      return;
    }
    this._loading = true;
    try {
      const buckets = await this.fetchBuckets();
      this._items = buckets as ReadonlyArray<Record<string, unknown>>;
    } catch {
      this._items = [];
    } finally {
      this._loading = false;
    }
  }

  private async _loadObjects(bucket: string, prefix: string): Promise<void> {
    if (!this.fetchObjects) {
      this._items = [];
      return;
    }
    this._loading = true;
    try {
      const objects = await this.fetchObjects(bucket, prefix);
      this._items = objects as ReadonlyArray<Record<string, unknown>>;
    } catch {
      this._items = [];
    } finally {
      this._loading = false;
    }
  }

  private _onSelectionChange = (e: CustomEvent<{ selectedItems: ReadonlyArray<Record<string, unknown>> }>): void => {
    e.stopPropagation();
    this._selectedItems = e.detail.selectedItems;
  };

  private _onRowClick = (e: CustomEvent<{ item: Record<string, unknown> }>): void => {
    e.stopPropagation();
    const item = e.detail.item;

    if (this._currentLevel === 'buckets') {
      const bucketName = (item as S3ResourceSelectorProps.Bucket).Name ?? '';
      this._currentLevel = 'objects';
      this._currentPath = [bucketName];
      this._selectedItems = [];
      this._loadObjects(bucketName, '');
    } else if (this._currentLevel === 'objects') {
      const obj = item as S3ResourceSelectorProps.Object;
      if (obj.IsFolder) {
        const key = obj.Key ?? '';
        this._currentPath = [...this._currentPath.slice(0, 1), ...key.split('/').filter(Boolean)];
        this._selectedItems = [];
        const prefix = this._currentPath.slice(1).join('/') + '/';
        this._loadObjects(this._currentPath[0], prefix);
      }
    }
  };

  private _onBreadcrumbFollow = (e: CustomEvent<{ item: BreadcrumbGroupProps.Item }>): void => {
    e.stopPropagation();
    const item = e.detail.item;

    if (item.href === '/') {
      this._currentLevel = 'buckets';
      this._currentPath = [];
      this._selectedItems = [];
      this._loadBuckets();
    } else {
      const depth = parseInt(item.href.replace('/path/', ''), 10);
      if (!isNaN(depth)) {
        this._currentPath = this._currentPath.slice(0, depth + 1);
        this._currentLevel = 'objects';
        this._selectedItems = [];
        const prefix = this._currentPath.slice(1).join('/');
        this._loadObjects(this._currentPath[0], prefix ? prefix + '/' : '');
      }
    }
  };

  private get _breadcrumbs(): BreadcrumbGroupProps.Item[] {
    const root = this.i18nStrings?.modalBreadcrumbRootItem ?? 'S3';
    const items: BreadcrumbGroupProps.Item[] = [{ text: root, href: '/' }];

    this._currentPath.forEach((segment, i) => {
      items.push({ text: segment, href: `/path/${i}` });
    });

    return items;
  }

  private get _columnDefinitions(): ReadonlyArray<{ id: string; header: string; cell: (item: Record<string, unknown>) => unknown; sortingField?: string }> {
    const strings = this.i18nStrings;

    if (this._currentLevel === 'buckets') {
      return [
        {
          id: 'Name',
          header: strings?.columnBucketName ?? 'Name',
          cell: (item) => (item as S3ResourceSelectorProps.Bucket).Name ?? '',
          sortingField: 'Name',
        },
        {
          id: 'CreationDate',
          header: strings?.columnBucketCreationDate ?? 'Creation date',
          cell: (item) => (item as S3ResourceSelectorProps.Bucket).CreationDate ?? '',
        },
      ];
    }

    if (this._currentLevel === 'objects') {
      return [
        {
          id: 'Key',
          header: strings?.columnObjectKey ?? 'Key',
          cell: (item) => (item as S3ResourceSelectorProps.Object).Key ?? '',
          sortingField: 'Key',
        },
        {
          id: 'LastModified',
          header: strings?.columnObjectLastModified ?? 'Last modified',
          cell: (item) => (item as S3ResourceSelectorProps.Object).LastModified ?? '',
        },
        {
          id: 'Size',
          header: strings?.columnObjectSize ?? 'Size',
          cell: (item) => {
            const size = (item as S3ResourceSelectorProps.Object).Size;
            return size !== undefined ? String(size) : '';
          },
        },
      ];
    }

    return [
      {
        id: 'VersionId',
        header: strings?.columnVersionID ?? 'Version ID',
        cell: (item) => (item as S3ResourceSelectorProps.Version).VersionId ?? '',
        sortingField: 'VersionId',
      },
      {
        id: 'LastModified',
        header: strings?.columnVersionLastModified ?? 'Last modified',
        cell: (item) => (item as S3ResourceSelectorProps.Version).LastModified ?? '',
      },
      {
        id: 'Size',
        header: strings?.columnVersionSize ?? 'Size',
        cell: (item) => {
          const size = (item as S3ResourceSelectorProps.Version).Size;
          return size !== undefined ? String(size) : '';
        },
      },
    ];
  }

  private get _selectionType(): 'single' | undefined {
    if (!this.selectableItemsTypes) return undefined;
    if (this._currentLevel === 'buckets' && this.selectableItemsTypes.includes('buckets')) return 'single';
    if (this._currentLevel === 'objects' && this.selectableItemsTypes.includes('objects')) return 'single';
    if (this._currentLevel === 'versions' && this.selectableItemsTypes.includes('versions')) return 'single';
    return undefined;
  }

  private get _tableHeaderText(): string {
    const strings = this.i18nStrings;
    if (this._currentLevel === 'buckets') return strings?.selectionBuckets ?? 'Buckets';
    if (this._currentLevel === 'objects') return strings?.selectionObjects ?? 'Objects';
    return strings?.selectionVersions ?? 'Versions';
  }

  private get _loadingText(): string {
    const strings = this.i18nStrings;
    if (this._currentLevel === 'buckets') return strings?.selectionBucketsLoading ?? 'Loading buckets';
    if (this._currentLevel === 'objects') return strings?.selectionObjectsLoading ?? 'Loading objects';
    return strings?.selectionVersionsLoading ?? 'Loading versions';
  }

  private get _emptyText(): string {
    const strings = this.i18nStrings;
    if (this._currentLevel === 'buckets') return strings?.selectionBucketsNoItems ?? 'No buckets';
    if (this._currentLevel === 'objects') return strings?.selectionObjectsNoItems ?? 'No objects';
    return strings?.selectionVersionsNoItems ?? 'No versions';
  }

  override render(): TemplateResult {
    const strings = this.i18nStrings;
    const browseLabel = strings?.inContextBrowseButton ?? 'Browse S3';
    const modalTitle = strings?.modalTitle ?? 'Choose resource from S3';
    const cancelLabel = strings?.modalCancelButton ?? 'Cancel';
    const submitLabel = strings?.modalSubmitButton ?? 'Select';
    const placeholder = this.inputPlaceholder ?? strings?.inContextInputPlaceholder ?? 's3://bucket/prefix/object';

    return html`
      <div class="root">
        <div class="input-row" style="display:flex;gap:8px;align-items:flex-start">
          <cs-input
            .value=${this._uri}
            placeholder=${placeholder}
            ?invalid=${this.invalid}
            aria-describedby=${this.inputAriaDescribedby ?? nothing}
            @change=${this._onUriChange}
            style="flex:1"
          ></cs-input>
          <cs-button @click=${this._openModal}>${browseLabel}</cs-button>
          ${this.viewHref
            ? html`<cs-button variant="normal" href=${this.viewHref}>${strings?.inContextViewButton ?? 'View'}</cs-button>`
            : nothing
          }
        </div>

        <slot name="alert"></slot>

        <cs-modal
          size="large"
          header=${modalTitle}
          .visible=${this._modalOpen}
          @dismiss=${this._closeModal}
        >
          <cs-breadcrumb-group
            .items=${this._breadcrumbs}
            @follow=${this._onBreadcrumbFollow}
          ></cs-breadcrumb-group>

          <cs-table
            .items=${this._items}
            .columnDefinitions=${this._columnDefinitions}
            .loading=${this._loading}
            loading-text=${this._loadingText}
            .selectionType=${this._selectionType}
            .selectedItems=${this._selectedItems}
            @selectionChange=${this._onSelectionChange}
            @rowClick=${this._onRowClick}
          >
            <cs-header slot="header" counter=${`(${this._items.length})`}>
              ${this._tableHeaderText}
            </cs-header>
            <div slot="empty">${this._emptyText}</div>
          </cs-table>

          <div slot="footer" style="display:flex;justify-content:flex-end;gap:8px">
            <cs-button variant="link" @click=${this._closeModal}>${cancelLabel}</cs-button>
            <cs-button
              variant="primary"
              @click=${this._confirmSelection}
              ?disabled=${this._selectedItems.length === 0}
            >${submitLabel}</cs-button>
          </div>
        </cs-modal>
      </div>
    `;
  }
}
