import { ParagraphAtom } from '../../atoms/ParagraphAtom/ParagraphAtom.jsx';

function MenuTextMolecule({ text }) {
  return text && <ParagraphAtom text={text} />;
}

export { MenuTextMolecule };
