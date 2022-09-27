import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-rectangle')
export class ArtisticRectangle extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  `;

  @property()
  width = 100;

  @property()
  height = 100;

  @property()
  color = '#f0f';

  render() {
    return html`<div
      style="width: ${this.width}; height: ${this.height}; background: ${this
        .color};"
    >
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-rectangle': ArtisticRectangle;
  }
}
