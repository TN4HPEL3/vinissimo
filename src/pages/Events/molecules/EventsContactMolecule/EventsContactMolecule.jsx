import { EventsContactAtom } from '../../atoms/EventsContactAtom/EventsContactAtom.jsx';
import { ParagraphAtom } from '../../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';

function EventsContactMolecule() {
  return <ParagraphAtom text={<EventsContactAtom />} />;
}

export { EventsContactMolecule };
