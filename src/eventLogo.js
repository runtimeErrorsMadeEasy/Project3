import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

const footerBanner = new URL('../assets/Footer.png', import.meta.url).href;

export class EventLogo extends SimpleColors {
  constructor() {
    super();
    this.icon = footerBanner;
  }

  static get tag() {
    return 'event-logo';
  }

  static get properties() {
    return {
      ...super.properties,
      icon: { type: String },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
        img {
          display: inline-flex;
        }

        .logoContainer {
          display: inline-flex;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="logoContainer" icon=${this.icon}>
        <img src="${this.icon}" alt="" />
      </div>
    `;
  }
}
customElements.define(EventLogo.tag, EventLogo);
