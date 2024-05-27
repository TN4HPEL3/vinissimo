import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/wineBottles.json';

function WineBottlesThirdPageOrganism() {
  const page = menu.page3;
  return (
    <div>
      <WineGlassesListOrganism
        category={'chardonnay'}
        data={page.burgundy}
        countryName="FRANCE"
        regionName="BURGUNDY"
        grapeName="CHARDONNAY"
        categoryTitle="WHITE WINES"
      />
      <WineGlassesListOrganism
        category={'aligote'}
        data={page.burgundy}
        grapeName="ALIGOTE"
      />
      <WineGlassesListOrganism
        category={'loireValley'}
        data={page}
        regionName="LOIRE VALLEY"
      />
      <WineGlassesListOrganism
        category={'alsace'}
        data={page}
        regionName="ALSACE"
      />
      <WineGlassesListOrganism
        category={'rhoneValley'}
        data={page}
        regionName="RHONE VALLEY"
      />
      <WineGlassesListOrganism
        category={'jura'}
        data={page}
        regionName="JURA"
      />
      <WineGlassesListOrganism
        category={'bordeaux'}
        data={page}
        regionName="BORDEAUX"
      />
    </div>
  );
}

export { WineBottlesThirdPageOrganism };
