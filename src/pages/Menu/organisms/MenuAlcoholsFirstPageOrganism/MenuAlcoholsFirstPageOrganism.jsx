import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { MenuAlcoholByCategoriesMolecule } from '../../molecules/MenuAlcoholByCategoriesMolecule/MenuAlcoholByCategoriesMolecule.jsx';

function MenuAlcoholsFirstPageOrganism() {
  const { t } = useLanguage();
  const { alcohols } = t;
  const titles = alcohols.titles;

  return (
    <>
      <MenuAlcoholByCategoriesMolecule alcohols={alcohols} titles={titles} />
    </>
  );
}

export { MenuAlcoholsFirstPageOrganism };
