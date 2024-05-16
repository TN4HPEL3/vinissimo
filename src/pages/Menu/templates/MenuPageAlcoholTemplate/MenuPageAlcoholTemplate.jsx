import { MenuPageTemplate } from '../MenuPageTemplate/MenuPageTemplate';
import { MenuAlcoholsOrganism } from '../../organisms/MenuAlcoholsOrganism/MenuAlcoholsOrganism';

import menu from '../../../../data/alcohols.json';

import css from './MenuPageAlcoholTemplate.module.css';

function MenuPageAlcoholTemplate() {
  return (
    <MenuPageTemplate className={css.menu__alcohols}>
      <div className={css.menu__alcohols__content}>
        <div>
          <MenuAlcoholsOrganism
            category={'cocktails'}
            data={menu}
            title={'cocktails'}
          />
          <MenuAlcoholsOrganism
            category={'apéritif'}
            data={menu}
            title={'apéritif'}
          />
          <MenuAlcoholsOrganism
            category={'vodka'}
            data={menu}
            title={'vodka | tincture'}
          />
        </div>
        <div>
          <MenuAlcoholsOrganism
            category={'highlandPark'}
            data={menu}
            title={'highland park single malt whisky'}
          />
          <MenuAlcoholsOrganism
            category={'whisky'}
            data={menu}
            title={'whisky | bourbon | whiskey'}
          />
          <MenuAlcoholsOrganism category={'rum'} data={menu} title={'rum'} />
        </div>
      </div>
    </MenuPageTemplate>
  );
}

export { MenuPageAlcoholTemplate };
