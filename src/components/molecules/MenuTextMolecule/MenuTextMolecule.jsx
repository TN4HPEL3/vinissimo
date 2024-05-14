import { ParagraphAtom } from '../../atoms/ParagraphAtom';

function MenuTextMolecule({ text }) {
  return text && <ParagraphAtom text={text} />;
}

export { MenuTextMolecule };
