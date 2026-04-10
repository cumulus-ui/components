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
  description: 'Learn the basics.',
  completed: false,
  completedScreenDescription: 'Done!',
  tasks: [
    {
      title: 'First task',
      steps: [
        { title: 'Step one', content: 'Do the first thing.', hotspotId: 'hotspot-demo-1' },
        { title: 'Step two', content: 'Do the second thing.', hotspotId: 'hotspot-demo-2' },
      ],
    },
  ],
};

@customElement('hotspot-permutations-page')
export class HotspotPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-wrap: wrap; gap: 48px; align-items: center; padding: 24px; }
    `];

  override render() {
    return html`
      <h2>Hotspot — Permutations</h2>

      <section>
        <h3>Standalone (no context — inactive)</h3>
        <div class="row">
          <cs-hotspot hotspot-id="standalone-1">
            <cs-button>Button with hotspot</cs-button>
          </cs-hotspot>
          <cs-hotspot hotspot-id="standalone-2" side="left">
            <cs-button>Left-side hotspot</cs-button>
          </cs-hotspot>
        </div>
      </section>

      <section>
        <h3>Inside annotation context (active)</h3>
        <div class="row">
          <cs-annotation-context .currentTutorial=${sampleTutorial} .i18nStrings=${sampleI18nStrings}>
            <cs-hotspot hotspot-id="hotspot-demo-1">
              <cs-button>Active hotspot (right)</cs-button>
            </cs-hotspot>
            <cs-hotspot hotspot-id="hotspot-demo-2" side="left" direction="bottom">
              <cs-button>Active hotspot (left)</cs-button>
            </cs-hotspot>
          </cs-annotation-context>
        </div>
      </section>

      <section>
        <h3>Direction variants</h3>
        <div class="row">
          <cs-hotspot hotspot-id="dir-top" direction="top"><span>Top</span></cs-hotspot>
          <cs-hotspot hotspot-id="dir-right" direction="right"><span>Right</span></cs-hotspot>
          <cs-hotspot hotspot-id="dir-bottom" direction="bottom"><span>Bottom</span></cs-hotspot>
          <cs-hotspot hotspot-id="dir-left" direction="left"><span>Left</span></cs-hotspot>
        </div>
      </section>
    `;
  }
}

export const tagName = 'hotspot-permutations-page';
