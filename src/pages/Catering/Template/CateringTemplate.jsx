import { smoothScrollToTop } from '../../../helpers/smoothScroll.js';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { ValentinesCategoryOrganism } from '../../Valentines/organisms/ValentinesCategoryOrganism.jsx';
import { ValentinesTitleAtom } from '../../Valentines/atoms/ValentinesTitleAtom/ValentinesTitleAtom.jsx';

function CateringTemplate() {
  const { t } = useLanguage();
  const { cateringMenu, cateringMenuCategories, cateringTitle } = t;
  const categories = Object.keys(cateringMenuCategories);
  smoothScrollToTop();

  return (
    <div>
      <ValentinesTitleAtom text={cateringTitle} />
      {categories.map(category => {
        const categoryName = cateringMenuCategories[category];
        const categoryDetails = cateringMenu[category];
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

export { CateringTemplate };
