import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

const footerBanner = new URL('../assets/Footer.png', import.meta.url).href;

export class EventHeader extends SimpleColors {
  constructor() {
    super();
    this.icon = footerBanner;
  }

  static get tag() {
    return 'event-header';
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

        .container {
          position: relative;
          text-align: center;
          color: red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          border-width: 10px;
        }

        #main-header {
          text-align: center;
          color: white;
          font-weight: lighter;
          font-size: 50px;
        }

        .centered {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `,
    ];
  }

  render() {
    return html` <div class="container">
      <img src="${this.icon}" alt="" />
      <div class="centered">
        <h2><slot id="main-header" name="main-header">main header</slot></h2>
      </div>
    </div>`;
  }
}
customElements.define(EventHeader.tag, EventHeader);
