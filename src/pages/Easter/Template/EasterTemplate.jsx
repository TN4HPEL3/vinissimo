import { smoothScrollToTop } from '../../../helpers/smoothScroll.js';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { ValentinesCategoryOrganism } from '../../Valentines/organisms/ValentinesCategoryOrganism.jsx';
import { ValentinesTitleAtom } from '../../Valentines/atoms/ValentinesTitleAtom/ValentinesTitleAtom.jsx';

function EasterTemplate() {
  const { t } = useLanguage();
  const { easterMenu, easterMenuCategories, easterTitle } = t;
  const categories = Object.keys(easterMenuCategories);
  smoothScrollToTop();

  return (
    <div>
      <ValentinesTitleAtom text={easterTitle} />
      {categories.map(category => {
        const categoryName = easterMenuCategories[category];
        const categoryDetails = easterMenu[category];
        return (
          <ValentinesCategoryOrganism
            key={category}
            name={categoryName}
            details={categoryDetails}
          />
        );
      })}
    </div>
  );
}

export { EasterTemplate };
