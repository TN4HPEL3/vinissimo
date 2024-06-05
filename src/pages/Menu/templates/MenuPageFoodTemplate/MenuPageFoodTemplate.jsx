import { MenuListOrganism } from '../../../../components/organisms/MenuListOrganism/MenuListOrganism.jsx';
import { MenuPageButtonsOrganism } from '../../organisms/MenuPageButtonsOrganism/MenuPageButtonsOrganism.jsx';

import menu from '../../../../data/menu.json';

import css from './MenuPageFoodTemplate.module.css';

function MenuPageFoodTemplate() {
  return (
    <div className={css.menu}>
      <MenuPageButtonsOrganism />
      <div className={css.menu__content}>
        <div>
          <MenuListOrganism
            category={'starters'}
            data={menu}
            title={'przystawki'}
          />
          <MenuListOrganism category={'cheeses'} data={menu} title={'sery'} />
          <MenuListOrganism category={'soups'} data={menu} title={'zupy'} />
        </div>
        <div>
          <MenuListOrganism
            category={'mains'}
            data={menu}
            title={'dania główne'}
          />
          <MenuListOrganism category={'sides'} data={menu} title={'dodatki'} />
          <MenuListOrganism
            category={'desserts'}
            data={menu}
            title={'na słodko'}
          />
        </div>
      </div>
    </div>
  );
}

export { MenuPageFoodTemplate };
