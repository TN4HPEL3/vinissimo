import { MenuTitleAtom } from '../../../../components/atoms/MenuTitleAtom/MenuTitleAtom';
import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism';

import menu from '../../../../data/wineBottles.json';

import css from '../WinePageListOrganism/WineGlassesListOrganism.module.css';

function WineBottlesSeventhPageOrganism() {
  const page = menu.page7;
  return (
    <div>
      <MenuTitleAtom
        className={css['wine__category-name']}
        title="WHITE WINES"
      />
      <WineGlassesListOrganism
        category={'australia'}
        data={page}
        countryName="AUSTRALIA"
        categoryTitle="NEW WORLD"
      />
      <WineGlassesListOrganism
        category={'chile'}
        data={page}
        countryName="CHILE"
      />
      <WineGlassesListOrganism
        category={'newZealand'}
        data={page}
        countryName="NEW ZEALAND"
      />
      <WineGlassesListOrganism category={'usa'} data={page} countryName="USA" />
      <WineGlassesListOrganism
        category={'uruguay'}
        data={page}
        countryName="URUGUAY"
      />
    </div>
  );
}

export { WineBottlesSeventhPageOrganism };
