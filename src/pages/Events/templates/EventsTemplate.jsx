import { EventsOrganism } from '../organisms/EventsOrganism.jsx';

import css from './EventsTemplate.module.css';

function EventsTemplate() {
  return (
    <div className={css.events}>
      <EventsOrganism />
    </div>
  );
}

export { EventsTemplate };
