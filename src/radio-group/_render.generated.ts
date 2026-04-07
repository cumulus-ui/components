  // ─── AUTO-GENERATED render template ─────────────────────────
  // Source: @cloudscape-design/components radio-group + radio-button + abstract-switch
  // Class names verified against Cloudscape CSS modules
  //
  // DO NOT manually edit class names — regenerate with:
  //   npx tsx scripts/generate-render.ts --component radio-group

  override render(): TemplateResult {
    const groupName = this.name || this._groupName;

    const groupClasses = {
      'radio-group': true,
      'horizontal-group': this.direction === 'horizontal',
    };

    return html`
      <div
        class=${classMap(groupClasses)}
        role="radiogroup"
        aria-label=${ifDefined(this.controlAriaLabel || undefined)}
        aria-required=${ifDefined(this.controlAriaRequired ? 'true' : undefined)}
        aria-controls=${ifDefined(this.controlAriaControls || undefined)}
        aria-disabled=${ifDefined(this.disabled ? 'true' : undefined)}
        aria-readonly=${ifDefined(this.readOnly ? 'true' : undefined)}
      >
        ${this.items.map((item, index) => this._renderItem(item, index, groupName))}
      </div>
    `;
  }

  private _renderItem(
    item: RadioGroupProps.RadioButtonDefinition,
    index: number,
    groupName: string,
  ): TemplateResult {
    const isChecked = item.value === this.value;
    const isDisabled = this.disabled || !!item.disabled;
    const itemId = item.controlId || generateUniqueId('radio-item');
    const descId = item.description ? `${itemId}-desc` : undefined;

    // radio-group layer classes
    const itemClasses = {
      'radio': true,
      'wrapper': true,
      'radio--has-description': !!item.description,
      'horizontal': this.direction === 'horizontal',
    };

    // abstract-switch control + radio-button control
    const controlClasses = {
      'control': true,
      'radio-control': true,
    };

    return html`
      <label
        class=${classMap(itemClasses)}
        @click=${(e: Event) => {
          e.preventDefault();
          this._onItemClick(item);
        }}
      >
        <span class=${classMap(controlClasses)}>
          <input
            type="radio"
            class="native-input"
            name=${groupName}
            .value=${item.value}
            .checked=${isChecked}
            ?disabled=${isDisabled}
            ?readonly=${this.readOnly}
            tabindex=${this._getTabIndex(index)}
            aria-describedby=${ifDefined(descId)}
            @click=${(e: Event) => e.preventDefault()}
            @focus=${() => this._onFocus(index)}
          />
          <svg class="radio-circle" viewBox="0 0 100 100" aria-hidden="true">
            <circle class=${classMap({
              'styled-circle-border': true,
              'styled-circle-disabled': isDisabled,
              'styled-circle-readonly': this.readOnly,
            })} stroke-width="6.25" cx="50" cy="50" r="46" />
            <circle class=${classMap({
              'styled-circle-fill': true,
              'styled-circle-checked': isChecked,
              'styled-circle-disabled': isDisabled,
              'styled-circle-readonly': this.readOnly,
            })} stroke-width="30" cx="50" cy="50" r="35" />
          </svg>
          <span class="outline"></span>
        </span>
        <span class="label-wrapper">
          <span class=${classMap({
            'label': true,
            'label-disabled': isDisabled,
          })}>
            ${item.label}
          </span>
          ${item.description ? html`
            <span
              id=${descId!}
              class=${classMap({
                'description': true,
                'description-disabled': isDisabled,
              })}
            >
              ${item.description}
            </span>
          ` : ''}
        </span>
      </label>
    `;
  }
