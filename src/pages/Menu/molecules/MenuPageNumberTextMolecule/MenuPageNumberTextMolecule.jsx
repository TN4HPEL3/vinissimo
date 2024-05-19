import { ParagraphAtom } from '../../../../components/atoms/ParagraphAtom';

function MenuPageNumberTextMolecule({ pageNumber, numberOfPages }) {
  return (
    <ParagraphAtom text={`Strona ${pageNumber + 1} z ${numberOfPages + 1}`} />
  );
}

export { MenuPageNumberTextMolecule };
