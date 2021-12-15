import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/eventLogo.js';

describe('eventLogo', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<event-icon>
      type=footerBanner
    </event-icon> `);
  });

  it('renders the element', () => {
    const icon = document.querySelector('event-icon');
    expect(icon).to.exist;
  });
});