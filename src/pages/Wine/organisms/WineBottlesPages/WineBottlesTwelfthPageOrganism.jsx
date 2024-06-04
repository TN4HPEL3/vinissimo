import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/wineBottles.json';

function WineBottlesTwelfthPageOrganism() {
  const page = menu.page12;
  return (
    <div>
      <WineGlassesListOrganism
        category={'sparklingWines'}
        data={page}
        regionName="SPARKLING WINES"
        categoryTitle="BIG BOTTLES"
      />
      <WineGlassesListOrganism
        category={'whiteWines'}
        data={page}
        regionName="WHITE WINES"
      />
      <WineGlassesListOrganism
        category={'redWines'}
        data={page}
        regionName="RED WINES"
      />
    </div>
  );
}

export { WineBottlesTwelfthPageOrganism };
