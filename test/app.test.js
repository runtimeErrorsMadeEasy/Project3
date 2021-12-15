import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';
import '../src/eventBadge.js';

describe('eventBadge', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<event-badge>
    <div id="holePunch" class="holePunch"></div>
    <h2 slot="main-header">testing my dumb tests</h2>
    <h23 slot="main-name">testing my dumb tests but this is name</h23>
    </event-badge>
    `);
  });

  it('renders the main header', () => {
    const h2 = element.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.innerText).to.equal('testing my dumb tests');
  });
  
  it('renders the name', () => {
    const h23 = element.querySelector('h23');
    expect(h23).to.exist;
    expect(h23.innerText).to.equal('testing my dumb tests but this is name');
  });


  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
