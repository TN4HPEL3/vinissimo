import { ParagraphAtom } from '../../atoms/ParagraphAtom';

function FooterHoursMolecule() {
  return (
    <div>
      <ParagraphAtom text="pon-sb: 14-22" />
      <ParagraphAtom text="niedziela: 13-19" />
    </div>
  );
}

export { FooterHoursMolecule };
