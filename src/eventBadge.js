// dependencies / things imported
import { LitElement, html, css } from 'lit';
import './eventHeader.js';
import './eventLogo.js';
import './eventName.js';
import './eventPhoto.js';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class EventBadge extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'event-badge';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.need = 'all need to succeed';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      need: { type: String, reflect: true },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'need' && this[propName] === 'joy') {
        this.classList.add('joyful');
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .badgeContainer {
        border-radius: 25px;
        background-color: #8ac007;
        width: 575px;
        height: 750px;
        border-width: 1px;
        display: flex;
        flex-direction: column;
      }
      .badgeBanner {
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding-left: 0px;
      }
      .badgeBannerContainer {
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding-top: 20px;
      }
      .holePunchContainer {
        padding-top: 20px;
      }
      .holePunch {
        margin: auto;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: white;
      }

      .photoContainer {
        display: flex;
        width: 575px;
        height: 500px;
      }

      .nameContainer {
        display: flex;
        float: left;
      }

      .logoContainer {
        display: flex;
        float: left;
        justify-content: end;
      }

      :hover .holePunch {
        box-shadow: inset 0px 0px 2px hsl(220deg 10% 40% / 0.333),
          inset 0px 0px 4px hsl(220deg 10% 40% / 0.333),
          inset 0px 0px 6px hsl(220deg 10% 40% / 0.333);
      }

      .badgeContainer:hover {
        box-shadow: 0px 0px 2px hsl(220deg 10% 40% / 0.333),
          0px 0px 4px hsl(220deg 10% 40% / 0.333),
          0px 0px 6px hsl(220deg 10% 40% / 0.333);
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
    <div class="badgeContainer">
    <div class="holePunchContainer">
        <div class="holePunch"></div>
    </div>
      <div class="badgeBannerContainer"> 
        <div
          class="badgeBanner"
          style="--learning-card-banner-color: ${this.bannerColor}"
        >
        </div>
        <event-header>
            <div slot="main-header">
              <slot name="header" style="">Main Header</slot>
            </div>
          </event-header>
        </div>
      <div class="photoContainer"><event-photo></event-photo></div>
      <div class="nameContainer"><event-name></event-name></div>
      <div class="logoContainer"><event-logo></event-logo></div>
      </div>
    </div>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/event-badge.haxProperties.json`, import.meta.url)
      .href;
  }
}
