import { ParagraphAtom } from '../../atoms/ParagraphAtom';

function FooterHoursMolecule({ textOpeningHours, textOpeningHoursSunday }) {
  return (
    <div>
      <ParagraphAtom text={textOpeningHours} />
      <ParagraphAtom text={textOpeningHoursSunday} />
    </div>
  );
}

export { FooterHoursMolecule };
