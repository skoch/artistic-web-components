import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-triangle-left')
export class ArtisticTriangleLeft extends LitElement {
  static styles = css`
    div {
      width: 0;
      height: 0;
    }
  `;

  @property()
  widthTop = '10rem';

  @property()
  widthBottom = '10rem';

  @property()
  width = '20rem';

  @property()
  color = '#f0f';

  render() {
    return html`<div
      style="border-top: ${this.widthTop} solid transparent;
      border-right: ${this.width} solid ${this.color};
      border-bottom: ${this.widthBottom} solid transparent;"
    >
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-triangle-left': ArtisticTriangleLeft;
  }
}
