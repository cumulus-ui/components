import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/s3-resource-selector/index.js';
import '../../../src/alert/index.js';
import type { S3ResourceSelectorProps } from '../../../src/s3-resource-selector/interfaces.js';

const MOCK_BUCKETS: ReadonlyArray<S3ResourceSelectorProps.Bucket> = [
  { Name: 'my-bucket-1', CreationDate: '2024-01-15' },
  { Name: 'my-bucket-2', CreationDate: '2024-06-20' },
  { Name: 'production-assets', CreationDate: '2023-11-03' },
];

const MOCK_OBJECTS: Record<string, ReadonlyArray<S3ResourceSelectorProps.Object>> = {
  'my-bucket-1/': [
    { Key: 'images/', IsFolder: true },
    { Key: 'data/', IsFolder: true },
    { Key: 'readme.txt', LastModified: '2024-03-10', Size: 1024 },
    { Key: 'config.json', LastModified: '2024-04-22', Size: 256 },
  ],
  'my-bucket-1/images/': [
    { Key: 'logo.png', LastModified: '2024-02-14', Size: 48000 },
    { Key: 'banner.jpg', LastModified: '2024-02-14', Size: 120000 },
  ],
  'my-bucket-2/': [
    { Key: 'reports/', IsFolder: true },
    { Key: 'index.html', LastModified: '2024-07-01', Size: 2048 },
  ],
};

@customElement('s3-resource-selector-permutations-page')
export class S3ResourceSelectorPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 { margin-top: 0; margin-bottom: 0.83em; line-height: 1.15; }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0; margin-bottom: 1em; font-size: 14px; line-height: 1.15;
      color: #687078; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .output { margin-top: 8px; font-size: 13px; color: #687078; }
  `;

  @state() private _resource1: S3ResourceSelectorProps.Resource = { uri: '' };
  @state() private _resource2: S3ResourceSelectorProps.Resource = { uri: 's3://my-bucket-1/readme.txt' };

  private _fetchBuckets = async (): Promise<ReadonlyArray<S3ResourceSelectorProps.Bucket>> => {
    await new Promise(r => setTimeout(r, 300));
    return MOCK_BUCKETS;
  };

  private _fetchObjects = async (bucket: string, prefix: string): Promise<ReadonlyArray<S3ResourceSelectorProps.Object>> => {
    await new Promise(r => setTimeout(r, 200));
    const key = `${bucket}/${prefix}`;
    return MOCK_OBJECTS[key] ?? [];
  };

  private _fetchVersions = async (): Promise<ReadonlyArray<S3ResourceSelectorProps.Version>> => {
    return [];
  };

  private _onChange1 = (e: CustomEvent<S3ResourceSelectorProps.ChangeDetail>): void => {
    this._resource1 = e.detail.resource;
  };

  private _onChange2 = (e: CustomEvent<S3ResourceSelectorProps.ChangeDetail>): void => {
    this._resource2 = e.detail.resource;
  };

  override render() {
    return html`
      <h2>S3 Resource Selector — Permutations</h2>

      <section>
        <h3>Default (empty)</h3>
        <cs-s3-resource-selector
          .resource=${this._resource1}
          .fetchBuckets=${this._fetchBuckets}
          .fetchObjects=${this._fetchObjects}
          .fetchVersions=${this._fetchVersions}
          .selectableItemsTypes=${['buckets', 'objects']}
          @change=${this._onChange1}
        ></cs-s3-resource-selector>
        <div class="output">URI: ${this._resource1.uri || '(none)'}</div>
      </section>

      <section>
        <h3>Pre-filled URI</h3>
        <cs-s3-resource-selector
          .resource=${this._resource2}
          .fetchBuckets=${this._fetchBuckets}
          .fetchObjects=${this._fetchObjects}
          .fetchVersions=${this._fetchVersions}
          .selectableItemsTypes=${['objects']}
          @change=${this._onChange2}
        ></cs-s3-resource-selector>
        <div class="output">URI: ${this._resource2.uri || '(none)'}</div>
      </section>

      <section>
        <h3>Invalid state</h3>
        <cs-s3-resource-selector
          .resource=${{ uri: 'not-an-s3-uri' }}
          .fetchBuckets=${this._fetchBuckets}
          .fetchObjects=${this._fetchObjects}
          .fetchVersions=${this._fetchVersions}
          ?invalid=${true}
        ></cs-s3-resource-selector>
      </section>

      <section>
        <h3>With alert slot</h3>
        <cs-s3-resource-selector
          .resource=${{ uri: '' }}
          .fetchBuckets=${this._fetchBuckets}
          .fetchObjects=${this._fetchObjects}
          .fetchVersions=${this._fetchVersions}
          .selectableItemsTypes=${['objects']}
        >
          <cs-alert slot="alert" type="info">Select an S3 object to continue.</cs-alert>
        </cs-s3-resource-selector>
      </section>

      <section>
        <h3>No fetch functions (empty browse)</h3>
        <cs-s3-resource-selector
          .resource=${{ uri: '' }}
        ></cs-s3-resource-selector>
      </section>
    `;
  }
}

export const tagName = 's3-resource-selector-permutations-page';
