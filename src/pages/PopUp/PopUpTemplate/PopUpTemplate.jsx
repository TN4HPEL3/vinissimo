import { useLanguage } from '../../../helpers/contexts/languageContext.js';

import { ParagraphAtom } from '../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';
import { MenuListOrganism } from '../../../components/organisms/MenuListOrganism/MenuListOrganism.jsx';

import cssPopUp from './PopUpTemplate.module.css';
import css from '../../Menu/templates/MenuPageFoodTemplate/MenuPageFoodTemplate.module.css';

function PopUpTemplate() {
  const { t } = useLanguage();
  const {
    menuStartersTitle,
    menuDessertsTitle,
    menuMainsTitle,
    menuSidesTitle,
    popUpMenu,
    menuSushiTitle,
    popUpDescription,
  } = t;
  return (
    <div className={css.menu}>
      <ParagraphAtom className={cssPopUp.description} text={popUpDescription} />
      <div className={css.menu__content}>
        <div>
          <MenuListOrganism
            category={'sushi'}
            data={popUpMenu}
            title={menuSushiTitle}
          />
        </div>
        <div>
          <MenuListOrganism
            category={'starters'}
            data={popUpMenu}
            title={menuStartersTitle}
          />
        </div>
        <div>
          <MenuListOrganism
            category={'mains'}
            data={popUpMenu}
            title={menuMainsTitle}
          />
          <MenuListOrganism
            category={'sides'}
            data={popUpMenu}
            title={menuSidesTitle}
          />
          <MenuListOrganism
            category={'desserts'}
            data={popUpMenu}
            title={menuDessertsTitle}
          />
        </div>
      </div>
    </div>
  );
}

export { PopUpTemplate };
