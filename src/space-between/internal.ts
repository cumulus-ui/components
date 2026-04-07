import { css, html } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { SpaceBetweenProps } from './interfaces.js';

const hostStyles = css`:host { display: block; }`;

export class CsSpaceBetweenInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  direction: SpaceBetweenProps.Direction = 'vertical';

  @property({ type: String })
  size: SpaceBetweenProps.Size = 's';

  @property({ type: String })
  alignItems?: SpaceBetweenProps.AlignItems;

  override render() {
    const classes = {
      'root': true,
      [this.direction]: true,
      [`${this.direction}-${this.size}`]: true,
      'align-center': this.alignItems === 'center',
      'align-start': this.alignItems === 'start',
      'align-end': this.alignItems === 'end',
    };

    return html`
      <div class=${classMap(classes)}>
        <slot></slot>
      </div>
    `;
  }
}
