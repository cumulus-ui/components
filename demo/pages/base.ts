import { LitElement, css } from 'lit';

export const permutationStyles = css`
  :host {
    display: block;
    padding: 24px;
    font-family: system-ui, sans-serif;
    line-height: 1.15;
  }
  h2 {
    margin-top: 0;
    margin-bottom: 0.83em;
    line-height: 1.15;
  }
  section {
    margin-bottom: 24px;
    padding: 16px;
    border: 1px solid #e9ebed;
    border-radius: 8px;
  }
  section h3 {
    margin-top: 0;
    margin-bottom: 1em;
    font-size: 14px;
    line-height: 1.15;
    color: #687078;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export class PermutationsPageBase extends LitElement {
  static override styles = [permutationStyles];
}
