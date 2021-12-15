import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';
import '../src/eventBadge.js';

describe('eventBadge', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <event-badge>
    <div id="holePunch" class="holePunch"></div>
    </event-badge>
    `);
  });

  //it('renders the hole punch', () => {
    //const element = document.querySelector('.holePunch')
   // element.eventBadge.contains("holePunchContainer");
  //});

});

//stumped on this test