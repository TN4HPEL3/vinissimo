import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { ParagraphAtom } from '../../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';

function MenuPageNumberTextMolecule({ pageNumber, numberOfPages }) {
  const { t } = useLanguage();
  const { winePageNumberText, winePageNumberOf } = t;
  return (
    <ParagraphAtom
      text={`${winePageNumberText} ${pageNumber + 1} ${winePageNumberOf} ${
        numberOfPages + 1
      }`}
    />
  );
}

export { MenuPageNumberTextMolecule };
