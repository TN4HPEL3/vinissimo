import { EventsContactMolecule } from '../molecules/EventsContactMolecule/EventsContactMolecule.jsx';
import { EventsDescriptionMolecule } from '../molecules/EventsDescriptionMolecule/EventsDescriptionMolecule.jsx';
import { EventsImagesMolecule } from '../molecules/EventsImagesMolecule/EventsImagesMolecule.jsx';

import css from './EventsOrganism.module.css';

function EventsOrganism() {
  return (
    <div className={css.events}>
      <EventsContactMolecule />
      <EventsImagesMolecule />
      <EventsDescriptionMolecule />
    </div>
  );
}

export { EventsOrganism };
