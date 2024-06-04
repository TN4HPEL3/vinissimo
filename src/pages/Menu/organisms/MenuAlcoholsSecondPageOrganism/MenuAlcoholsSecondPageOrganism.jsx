import { MenuAlcoholsOrganism } from '../MenuAlcoholsOrganism/MenuAlcoholsOrganism.jsx';

import menu from '../../../../data/alcohols.json';

function MenuAlcoholsSecondPageOrganism() {
  return (
    <>
      <div>
        <MenuAlcoholsOrganism
          category={'tequila'}
          data={menu}
          title={'tequila'}
        />
        <MenuAlcoholsOrganism category={'gin'} data={menu} title={'gin'} />
        <MenuAlcoholsOrganism
          category={'cognac'}
          data={menu}
          title={'cognac | brandy | armagnac'}
        />
      </div>
      <div>
        <MenuAlcoholsOrganism
          category={'vermouth'}
          data={menu}
          title={'vermouth'}
        />

        <MenuAlcoholsOrganism
          category={'digestif'}
          data={menu}
          title={'digestif'}
        />

        <MenuAlcoholsOrganism
          category={'liqueurs'}
          data={menu}
          title={'liqueurs'}
        />
      </div>
    </>
  );
}

export { MenuAlcoholsSecondPageOrganism };
