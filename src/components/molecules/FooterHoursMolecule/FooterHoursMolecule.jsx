import { ParagraphAtom } from '../../atoms/ParagraphAtom/ParagraphAtom.jsx';

function FooterHoursMolecule({ textOpeningHours, textOpeningHoursSunday }) {
  return (
    <div>
      <ParagraphAtom text={textOpeningHours} />
      <ParagraphAtom text={textOpeningHoursSunday} />
    </div>
  );
}

export { FooterHoursMolecule };
