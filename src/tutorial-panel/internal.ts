import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { TutorialPanelProps } from './interfaces.js';
import '../button/index.js';
import '../spinner/index.js';
import '../icon/index.js';
import '../status-indicator/index.js';
import '../link/index.js';

const hostStyles = css`:host { display: block; }`;

type ViewState = 'list' | 'detail' | 'completed';

export class CsTutorialPanelInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  tutorials: TutorialPanelProps['tutorials'] = [];

  @property({ type: Boolean })
  loading = false;

  @property({ attribute: false })
  i18nStrings!: TutorialPanelProps['i18nStrings'];

  @property({ type: String, attribute: 'download-url' })
  downloadUrl?: string;

  @state()
  private _viewState: ViewState = 'list';

  @state()
  private _activeTutorial: TutorialPanelProps.Tutorial | null = null;

  private _onStartTutorial(tutorial: TutorialPanelProps.Tutorial): void {
    this._activeTutorial = tutorial;
    this._viewState = 'detail';
    fireNonCancelableEvent(this, 'feedbackClick', { tutorial });
  }

  private _onDismissTutorial = (): void => {
    const tutorial = this._activeTutorial;
    this._activeTutorial = null;
    this._viewState = 'list';
    if (tutorial) {
      fireNonCancelableEvent(this, 'feedbackClick', { tutorial });
    }
  };

  private _onCompleteTutorial = (): void => {
    this._viewState = 'completed';
  };

  private _onBackToList = (): void => {
    this._activeTutorial = null;
    this._viewState = 'list';
  };

  private _renderLoading(): TemplateResult {
    return html`
      <div class="tutorial-panel" role="region" aria-label="${this.i18nStrings.loadingText}">
        <div class="loading-state">
          <cs-spinner size="normal"></cs-spinner>
          <span>${this.i18nStrings.loadingText}</span>
        </div>
      </div>
    `;
  }

  private _renderTutorialList(): TemplateResult {
    return html`
      <div class="tutorial-panel" role="region" aria-label="${this.i18nStrings.tutorialListTitle}" tabindex="-1">
        <h2 class="tutorial-list-title">${this.i18nStrings.tutorialListTitle}</h2>
        <div class="tutorial-list-description">${this.i18nStrings.tutorialListDescription}</div>

        ${this.downloadUrl ? html`
          <div class="download-link">
            <cs-link href=${this.downloadUrl} external
              aria-label=${this.i18nStrings.labelTutorialListDownloadLink ?? this.i18nStrings.tutorialListDownloadLinkText}>
              ${this.i18nStrings.tutorialListDownloadLinkText}
            </cs-link>
          </div>
        ` : nothing}

        <ul class="tutorial-list" role="list">
          ${this.tutorials.map(tutorial => this._renderTutorialItem(tutorial))}
        </ul>
        <slot></slot>
      </div>
    `;
  }

  private _renderTutorialItem(tutorial: TutorialPanelProps.Tutorial): TemplateResult {
    const totalSteps = tutorial.tasks.reduce((acc, task) => acc + task.steps.length, 0);
    const isCompleted = tutorial.completed;
    const isDisabled = tutorial.prerequisitesNeeded === true;

    return html`
      <li class=${classMap({ 'tutorial-item': true, 'tutorial-completed': isCompleted })}>
        <div class="tutorial-title">${tutorial.title}</div>

        ${isCompleted ? html`
          <cs-status-indicator type="success">
            ${this.i18nStrings.tutorialCompletedText}
          </cs-status-indicator>
        ` : nothing}

        ${isDisabled && tutorial.prerequisitesAlert ? html`
          <div class="prerequisites-alert">${tutorial.prerequisitesAlert}</div>
        ` : nothing}

        <div class="tutorial-description">${tutorial.description}</div>

        <div class="tutorial-meta">
          <span>${this.i18nStrings.labelTotalSteps(totalSteps)}</span>
          ${tutorial.learnMoreUrl ? html`
            <cs-link href=${tutorial.learnMoreUrl} external
              aria-label=${this.i18nStrings.labelLearnMoreLink ?? this.i18nStrings.learnMoreLinkText}>
              ${this.i18nStrings.learnMoreLinkText}
            </cs-link>
          ` : nothing}
        </div>

        <cs-button
          variant="normal"
          ?disabled=${isDisabled}
          @click=${() => this._onStartTutorial(tutorial)}
        >
          ${isCompleted ? this.i18nStrings.restartTutorialButtonText : this.i18nStrings.startTutorialButtonText}
        </cs-button>
      </li>
    `;
  }

  private _renderDetailView(): TemplateResult {
    const tutorial = this._activeTutorial!;

    return html`
      <div class="tutorial-panel" role="region" aria-label="${tutorial.title}" tabindex="-1">
        <div class="detail-header">
          <cs-button
            variant="icon"
            icon-name="close"
            aria-label=${this.i18nStrings.labelExitTutorial}
            @click=${this._onDismissTutorial}
          ></cs-button>
          <h2 class="detail-title">${tutorial.title}</h2>
        </div>

        <ol class="task-list" role="list">
          ${tutorial.tasks.map((task, taskIndex) => html`
            <li class="task-item">
              <div class="task-title">
                ${this.i18nStrings.taskTitle(taskIndex + 1, task.title)}
              </div>
              <ul class="step-list" role="list">
                ${task.steps.map((step, stepIndex) => html`
                  <li class="step-item">
                    ${this.i18nStrings.stepTitle(stepIndex + 1, step.title)}
                  </li>
                `)}
              </ul>
            </li>
          `)}
        </ol>

        <div class="detail-actions">
          <cs-button variant="link" @click=${this._onDismissTutorial}>
            ${this.i18nStrings.dismissTutorialButtonText}
          </cs-button>
          <cs-button variant="primary" @click=${this._onCompleteTutorial}>
            ${this.i18nStrings.completionScreenTitle}
          </cs-button>
        </div>
      </div>
    `;
  }

  private _renderCompletedView(): TemplateResult {
    const tutorial = this._activeTutorial;

    return html`
      <div class="tutorial-panel" role="region" aria-label="${this.i18nStrings.completionScreenTitle}" tabindex="-1">
        <div class="completed-screen">
          <cs-icon name="status-positive" size="big"></cs-icon>
          <h2>${this.i18nStrings.completionScreenTitle}</h2>
          ${tutorial ? html`<p>${tutorial.completedScreenDescription}</p>` : nothing}
          <div class="completed-actions">
            <cs-button variant="primary" @click=${this._onBackToList}>
              ${this.i18nStrings.dismissTutorialButtonText}
            </cs-button>
            ${tutorial ? html`
              <cs-button variant="link" @click=${() => fireNonCancelableEvent(this, 'feedbackClick', { tutorial })}>
                ${this.i18nStrings.feedbackLinkText}
              </cs-button>
            ` : nothing}
          </div>
        </div>
      </div>
    `;
  }

  override render(): TemplateResult {
    if (!this.i18nStrings) {
      return html`<slot></slot>`;
    }

    if (this.loading) {
      return this._renderLoading();
    }

    switch (this._viewState) {
      case 'detail':
        return this._renderDetailView();
      case 'completed':
        return this._renderCompletedView();
      default:
        return this._renderTutorialList();
    }
  }
}
