import { ParagraphAtom } from '../../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';
import { EventsDescriptionAtom } from '../../atoms/EventsDescriptionAtom/EventsDescriptionAtom.jsx';

function EventsDescriptionMolecule() {
  return <ParagraphAtom text={<EventsDescriptionAtom />} />;
}

export { EventsDescriptionMolecule };
