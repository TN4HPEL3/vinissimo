import { ParagraphAtom } from '../../atoms/ParagraphAtom/ParagraphAtom.jsx';

function FooterHolidayHoursMolecule({ text, hours }) {
  return (
    <div>
      <ParagraphAtom text={text} />
      <ParagraphAtom text={hours} />
    </div>
  );
}

export { FooterHolidayHoursMolecule };
