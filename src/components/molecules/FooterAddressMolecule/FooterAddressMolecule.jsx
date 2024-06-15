import { ParagraphAtom } from '../../atoms/ParagraphAtom/ParagraphAtom.jsx';

function FooterAddressMolecule({ textName, textAddress }) {
  return (
    <div>
      <ParagraphAtom text={textName} />
      <ParagraphAtom text={textAddress} />
    </div>
  );
}

export { FooterAddressMolecule };
