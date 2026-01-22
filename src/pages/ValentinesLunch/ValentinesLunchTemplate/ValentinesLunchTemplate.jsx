import { smoothScrollToTop } from '../../../helpers/smoothScroll.js';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { ValentinesCategoryOrganism } from '../../Valentines/organisms/ValentinesCategoryOrganism.jsx';
import { ValentinesTitleAtom } from '../../Valentines/atoms/ValentinesTitleAtom/ValentinesTitleAtom.jsx';
import { ParagraphAtom } from '../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';

function ValentinesLunchTemplate() {
  const { t } = useLanguage();
  const {
    valentinesLunchMenu,
    valentinesLunchMenuCategories,
    valentinesLunchTitleMenu,
    valentinesLunchDescription,
  } = t;
  const categories = Object.keys(valentinesLunchMenuCategories);
  smoothScrollToTop();

  return (
    <div>
      <ValentinesTitleAtom text={valentinesLunchTitleMenu} />
      <ParagraphAtom text={valentinesLunchDescription} />
      <ValentinesTitleAtom />
      {categories.map(category => {
        const categoryName = valentinesLunchMenuCategories[category];
        const categoryDetails = valentinesLunchMenu[category];
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

export { ValentinesLunchTemplate };
