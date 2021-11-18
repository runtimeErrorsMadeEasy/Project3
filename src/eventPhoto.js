import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class EventPhoto extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
  }

  static get tag() {
    return 'event-photo';
  }

  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  render() {
    return html` <div>
      <div id="headers">
        <h2><slot id="main-header" name="main-header">main header</slot></h2>
      </div>
    </div>`;
  }
}
customElements.define(EventPhoto.tag, EventPhoto);
