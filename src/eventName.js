import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class EventName extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
  }

  static get tag() {
    return 'event-name';
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
          display: inline-flex;
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
customElements.define(EventName.tag, EventName);
