import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { NewYearCategoryOrganism } from '../organisms/NewYearCategoryOrganism.jsx';

function NewYearDeLuxTemplate() {
  const { t } = useLanguage();
  const { xmasMenuDeLux, xmasMenuDeLuxCategories } = t;
  const categories = Object.keys(xmasMenuDeLuxCategories);

  return (
    <div>
      {categories.map(category => {
        const categoryName = xmasMenuDeLuxCategories[category];
        const categoryDetails = xmasMenuDeLux[category];
        return (
          <NewYearCategoryOrganism
            key={category}
            name={categoryName}
            details={categoryDetails}
            category={category}
          />
        );
      })}
    </div>
  );
}

export { NewYearDeLuxTemplate };
