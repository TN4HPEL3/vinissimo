import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { ArticleAtom } from '../../../../components/atoms/ArticleAtom/ArticleAtom.jsx';
import { MenuTitleAtom } from '../../../../components/atoms/MenuTitleAtom/MenuTitleAtom.jsx';
import { ParagraphAtom } from '../../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';

function MenuWineBottlesTextOrganism() {
  const { t } = useLanguage();
  return (
    <ArticleAtom>
      <MenuTitleAtom title={t.wineBottlesPage1_1} />
      <br />
      <ParagraphAtom text={t.wineBottlesPage1_2} />
      <br />
      <ParagraphAtom text={t.wineBottlesPage1_3} />
      <ParagraphAtom text={t.wineBottlesPage1_4} />
      <ParagraphAtom text={t.wineBottlesPage1_5} />
      {t.language === 'ENG' && <br />}
      <ParagraphAtom text={t.wineBottlesPage1_6} />
    </ArticleAtom>
  );
}

export { MenuWineBottlesTextOrganism };
