import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/form-field/index.js';

@customElement('form-field-permutations-page')
export class FormFieldPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    input, textarea {
      width: 300px;
      padding: 6px 10px;
      border: 1px solid #7d8998;
      border-radius: 4px;
      font-size: 14px;
      font-family: inherit;
    }
    textarea {
      min-height: 60px;
    }
    `];

  override render() {
    return html`
      <h2>Form Field — Permutations</h2>

      <section>
        <h3>Label Only</h3>
        <cs-form-field label="Name">
          <input type="text" placeholder="Enter name" />
        </cs-form-field>
      </section>

      <section>
        <h3>With Description</h3>
        <cs-form-field label="Email" description="We'll never share your email with anyone.">
          <input type="email" placeholder="user@example.com" />
        </cs-form-field>
      </section>

      <section>
        <h3>With Error</h3>
        <cs-form-field label="Password" error-text="Password is required">
          <input type="password" />
        </cs-form-field>
      </section>

      <section>
        <h3>With Warning</h3>
        <cs-form-field label="Username" warning-text="This username might already be taken">
          <input type="text" value="admin" />
        </cs-form-field>
      </section>

      <section>
        <h3>With Constraint</h3>
        <cs-form-field label="Bio" constraint-text="Maximum 200 characters">
          <textarea placeholder="Tell us about yourself"></textarea>
        </cs-form-field>
      </section>

      <section>
        <h3>All Features</h3>
        <cs-form-field
          label="Full Name"
          description="Enter your full legal name"
          error-text="Name is required"
          constraint-text="2-50 characters"
        >
          <input type="text" />
        </cs-form-field>
      </section>

      <section>
        <h3>Custom Control ID</h3>
        <cs-form-field label="Phone" control-id="my-phone-input">
          <input type="tel" />
        </cs-form-field>
      </section>
    `;
  }
}

export const tagName = 'form-field-permutations-page';
