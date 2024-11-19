import { ParagraphAtom } from '../../atoms/ParagraphAtom/ParagraphAtom.jsx';

function FooterHoursMolecule({
  textOpeningHours,
  textOpeningHoursSunday,
  children,
}) {
  return (
    <div>
      <ParagraphAtom text={textOpeningHours} />
      <ParagraphAtom text={textOpeningHoursSunday} />
      <br />
      {children}
    </div>
  );
}

export { FooterHoursMolecule };
