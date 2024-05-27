import { MenuAlcoholsOrganism } from '../MenuAlcoholsOrganism/MenuAlcoholsOrganism.jsx';

import menu from '../../../../data/alcohols.json';

function MenuAlcoholsFirstPageOrganism() {
  return (
    <>
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
    </>
  );
}

export { MenuAlcoholsFirstPageOrganism };
