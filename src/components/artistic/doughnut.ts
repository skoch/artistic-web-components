import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-doughnut')
export class ArtisticDoughnut extends LitElement {
  static styles = css`
    div {
      border-radius: 50%/50%;
      /* display: flex; */
      /* align-items: center; */
      /* justify-content: center; */
    }
  `;

  @property()
  diameter = 10;

  @property()
  lineWidth = 10;

  @property()
  color = '#f0f';

  render() {
    const size = this.diameter - this.lineWidth * 2;
    return html`<div
      style="width: ${size}rem; height: ${size}rem; border: solid ${this
        .lineWidth}rem ${this.color};"
    >
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-doughnut': ArtisticDoughnut;
  }
}
