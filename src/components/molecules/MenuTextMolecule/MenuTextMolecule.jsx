import { ParagraphAtom } from '../../atoms/ParagraphAtom/ParagraphAtom.jsx';

function MenuTextMolecule({ text, className }) {
  return text && <ParagraphAtom className={className} text={text} />;
}

export { MenuTextMolecule };
