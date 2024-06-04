import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/wineBottles.json';

function WineBottlesTenthPageOrganism() {
  const page = menu.page10;
  return (
    <div>
      <WineGlassesListOrganism
        category={'rioja'}
        data={page}
        countryName="SPAIN"
        regionName="RIOJA"
        categoryTitle="RED WINES"
      />
      <WineGlassesListOrganism
        category={'riberaDelDuero'}
        data={page}
        regionName="RIBERA DEL DUERO"
      />
      <WineGlassesListOrganism
        category={'castillaYLeon'}
        data={page}
        regionName="CASTILIA Y LEON"
      />
      <WineGlassesListOrganism
        category={'priorat'}
        data={page}
        regionName="PRIORAT"
      />
      <WineGlassesListOrganism
        category={'castillaLaMancha'}
        data={page}
        regionName="CASTILIA LA MANCHA"
      />
      <WineGlassesListOrganism
        category={'andalusia'}
        data={page}
        regionName="ANDALUSIA"
      />
      <WineGlassesListOrganism
        category={'catalonia'}
        data={page}
        regionName="CATALONIA"
      />
    </div>
  );
}

export { WineBottlesTenthPageOrganism };
