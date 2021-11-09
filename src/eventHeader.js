import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LearningHeader extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
  }

  static get tag() {
    return 'learning-header';
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
        #headers {
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

        #headers h2 {
          margin: 0;
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
customElements.define(LearningHeader.tag, LearningHeader);
