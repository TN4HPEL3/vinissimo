import { smoothScrollToTop } from '../../../helpers/smoothScroll.js';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { NewYearCategoryOrganism } from '../organisms/NewYearCategoryOrganism.jsx';

function NewYearBasicTemplate() {
  const { t } = useLanguage();
  const { xmasMenuBasic, xmasMenuBasicCategories } = t;
  const categories = Object.keys(xmasMenuBasicCategories);
  smoothScrollToTop();
  return (
    <div>
      {categories.map(category => {
        const categoryName = xmasMenuBasicCategories[category];
        const categoryDetails = xmasMenuBasic[category];
        return (
          <NewYearCategoryOrganism
            key={category}
            category={category}
            name={categoryName}
            details={categoryDetails}
          />
        );
      })}
    </div>
  );
}

export { NewYearBasicTemplate };
