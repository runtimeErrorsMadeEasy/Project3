import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/eventHeader.js';

describe('eventBadge', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<event-header> slot="header"
      <h2 slot="main-header">test</h2>
    </event-header> `);
  });

  it('renders the header element', () => {
    const header = document.querySelector('event-header');
    expect(header).to.exist;
  });

  it('renders the main header', () => {
    const h2 = element.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.innerText).to.equal('TEST');
  });
});