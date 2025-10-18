import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { MenuListOrganism } from '../../organisms/MenuListOrganism/MenuListOrganism.jsx';

import css from './PopUpMenuTemplate.module.css';

function PopUpMenuTemplate() {
  const { t } = useLanguage();
  const { menuTitle, snackTitle, menu, dessertTitle } = t.popUpEvent;
  const { menuStartersTitle, menuMainsTitle, menuSidesTitle } = t;

  return (
    <div className={css.menu}>
      <h2 className={css.title}>{menuTitle}</h2>
      <div className={css.menu__content}>
        <div>
          <MenuListOrganism
            category={'snacks'}
            data={menu}
            title={snackTitle}
          />
        </div>
        <div>
          <MenuListOrganism
            category={'starters'}
            data={menu}
            title={menuStartersTitle}
          />
        </div>
        <div>
          <MenuListOrganism
            category={'mains'}
            data={menu}
            title={menuMainsTitle}
          />
          <MenuListOrganism
            category={'sides'}
            data={menu}
            title={menuSidesTitle}
          />
          <MenuListOrganism
            category={'desserts'}
            data={menu}
            title={dessertTitle}
          />
        </div>
      </div>
    </div>
  );
}

export { PopUpMenuTemplate };
