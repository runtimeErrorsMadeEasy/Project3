import { html } from 'lit';

import '../event.js';

export default {
  title: 'event',
  component: 'event',
  argTypes: {
    need: { control: 'text' },
  },
};

function Template({ need = 'event', slot }) {
  return html` <event need="${need}"> ${slot} </event> `;
}
export const Card = Template.bind({});

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  need: 'science',
  slot: html`<p>slotted content that should render</p>`,
};
