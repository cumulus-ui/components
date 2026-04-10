import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/annotation-context/index.js';
import '../../../src/hotspot/index.js';
import '../../../src/button/index.js';

const sampleI18nStrings = {
  nextButtonText: 'Next',
  previousButtonText: 'Previous',
  finishButtonText: 'Finish',
  labelDismissAnnotation: 'Dismiss annotation',
  labelHotspot: (_open: boolean, step: number, total: number) => `Hotspot, step ${step} of ${total}`,
  stepCounterText: (step: number, total: number) => `Step ${step} of ${total}`,
  taskTitle: (index: number, title: string) => `Task ${index}: ${title}`,
};

const sampleTutorial = {
  title: 'Getting Started',
  description: 'Learn the basics of this application.',
  completed: false,
  completedScreenDescription: 'You have completed the tutorial!',
  tasks: [
    {
      title: 'First task',
      steps: [
        { title: 'Click the button', content: 'Click the button below to proceed.', hotspotId: 'sample-hotspot-1' },
        { title: 'Check the result', content: 'Verify the action succeeded.', hotspotId: 'sample-hotspot-2' },
      ],
    },
  ],
};

@customElement('annotation-context-permutations-page')
export class AnnotationContextPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      align-items: center;
    }
    `];

  override render() {
    return html`
      <h2>Annotation Context — Permutations</h2>

      <section>
        <h3>Without tutorial (inactive)</h3>
        <div class="row">
          <cs-annotation-context .currentTutorial=${null} .i18nStrings=${sampleI18nStrings}>
            <cs-hotspot hotspot-id="sample-hotspot-1">
              <cs-button>Target button</cs-button>
            </cs-hotspot>
          </cs-annotation-context>
        </div>
      </section>

      <section>
        <h3>With active tutorial</h3>
        <div class="row">
          <cs-annotation-context .currentTutorial=${sampleTutorial} .i18nStrings=${sampleI18nStrings}>
            <cs-hotspot hotspot-id="sample-hotspot-1">
              <cs-button>First hotspot</cs-button>
            </cs-hotspot>
            <cs-hotspot hotspot-id="sample-hotspot-2" side="left">
              <cs-button>Second hotspot</cs-button>
            </cs-hotspot>
          </cs-annotation-context>
        </div>
      </section>
    `;
  }
}

export const tagName = 'annotation-context-permutations-page';
