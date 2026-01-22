import { smoothScrollToTop } from '../../../helpers/smoothScroll.js';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { ValentinesCategoryOrganism } from '../organisms/ValentinesCategoryOrganism.jsx';
import { ValentinesTitleAtom } from '../atoms/ValentinesTitleAtom/ValentinesTitleAtom.jsx';

function ValentinesTemplate() {
  const { t } = useLanguage();
  const { valentinesMenu, valentinesMenuCategories, valentinesTitleMenu } = t;
  const categories = Object.keys(valentinesMenuCategories);
  smoothScrollToTop();

  return (
    <div>
      <ValentinesTitleAtom text={valentinesTitleMenu} />
      {categories.map(category => {
        const categoryName = valentinesMenuCategories[category];
        const categoryDetails = valentinesMenu[category];
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

export { ValentinesTemplate };
