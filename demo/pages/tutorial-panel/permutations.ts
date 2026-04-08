import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/tutorial-panel/index.js';

const sampleI18nStrings = {
  loadingText: 'Loading tutorials...',
  tutorialListTitle: 'Tutorials',
  tutorialListDescription: 'Learn how to use this service with step-by-step guides.',
  tutorialListDownloadLinkText: 'Download all tutorials (PDF)',
  tutorialCompletedText: 'Tutorial completed',
  learnMoreLinkText: 'Learn more',
  startTutorialButtonText: 'Start tutorial',
  restartTutorialButtonText: 'Restart tutorial',
  completionScreenTitle: 'Congratulations!',
  feedbackLinkText: 'Give feedback',
  dismissTutorialButtonText: 'Dismiss',
  taskTitle: (index: number, title: string) => `Task ${index}: ${title}`,
  stepTitle: (index: number, title: string) => `Step ${index}: ${title}`,
  labelExitTutorial: 'Exit tutorial',
  labelTotalSteps: (count: number) => `${count} steps`,
  labelLearnMoreExternalIcon: 'Opens in new tab',
  labelsTaskStatus: { pending: 'Pending', 'in-progress': 'In progress', success: 'Completed' },
};

const sampleTutorials = [
  {
    title: 'Create your first bucket',
    description: 'Learn how to create and configure an S3 bucket.',
    completed: false,
    completedScreenDescription: 'You successfully created a bucket!',
    learnMoreUrl: 'https://example.com/learn-more',
    tasks: [
      {
        title: 'Navigate to S3',
        steps: [
          { title: 'Open S3 console', content: 'Click on S3 in the sidebar.', hotspotId: 's3-nav' },
          { title: 'Click create', content: 'Click the Create Bucket button.', hotspotId: 's3-create' },
        ],
      },
    ],
  },
  {
    title: 'Upload a file',
    description: 'Learn how to upload files to your bucket.',
    completed: true,
    completedScreenDescription: 'File uploaded successfully!',
    tasks: [
      {
        title: 'Select bucket',
        steps: [
          { title: 'Choose bucket', content: 'Select the target bucket.', hotspotId: 'bucket-select' },
        ],
      },
    ],
  },
  {
    title: 'Configure permissions',
    description: 'Set up access control for your bucket.',
    completed: false,
    completedScreenDescription: 'Permissions configured!',
    prerequisitesNeeded: true,
    prerequisitesAlert: 'Create a bucket first to configure permissions.',
    tasks: [
      {
        title: 'Open permissions',
        steps: [
          { title: 'Navigate to permissions', content: 'Click the Permissions tab.', hotspotId: 'perm-tab' },
        ],
      },
    ],
  },
];

@customElement('tutorial-panel-permutations-page')
export class TutorialPanelPermutationsPage extends LitElement {
  static override styles = css`
    :host { display: block; padding: 24px; font-family: system-ui, sans-serif; line-height: 1.15; }
    h2 { margin-top: 0; margin-bottom: 0.83em; line-height: 1.15; }
    section {
      margin-bottom: 24px; padding: 16px;
      border: 1px solid #e9ebed; border-radius: 8px;
    }
    section h3 {
      margin-top: 0; margin-bottom: 1em; font-size: 14px;
      line-height: 1.15; color: #687078;
      text-transform: uppercase; letter-spacing: 0.5px;
    }
    .panel-container {
      max-width: 320px; border: 1px solid #d1d5db;
      border-radius: 8px; overflow: hidden;
    }
  `;

  override render() {
    return html`
      <h2>Tutorial Panel — Permutations</h2>

      <section>
        <h3>Loading state</h3>
        <div class="panel-container">
          <cs-tutorial-panel loading .tutorials=${[]} .i18nStrings=${sampleI18nStrings}></cs-tutorial-panel>
        </div>
      </section>

      <section>
        <h3>Tutorial list</h3>
        <div class="panel-container">
          <cs-tutorial-panel
            .tutorials=${sampleTutorials}
            .i18nStrings=${sampleI18nStrings}
            download-url="https://example.com/tutorials.pdf"
          ></cs-tutorial-panel>
        </div>
      </section>

      <section>
        <h3>Empty list</h3>
        <div class="panel-container">
          <cs-tutorial-panel .tutorials=${[]} .i18nStrings=${sampleI18nStrings}></cs-tutorial-panel>
        </div>
      </section>
    `;
  }
}

export const tagName = 'tutorial-panel-permutations-page';
