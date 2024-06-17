import { EventsImagesMolecule } from '../molecules/EventsImagesMolecule/EventsImagesMolecule.jsx';
import { EventsContactMolecule } from '../molecules/EventsContactMolecule/EventsContactMolecule.jsx';
import { EventsDescriptionMolecule } from '../molecules/EventsDescriptionMolecule/EventsDescriptionMolecule.jsx';

function EventsOrganism() {
  return (
    <>
      <EventsContactMolecule />
      <EventsImagesMolecule />
      <EventsDescriptionMolecule />
    </>
  );
}

export { EventsOrganism };
