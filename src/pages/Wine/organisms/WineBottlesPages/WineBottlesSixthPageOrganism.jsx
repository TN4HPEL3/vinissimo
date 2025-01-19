import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/wineBottles.json';

function WineBottlesSixthPageOrganism() {
  const page = menu.page6;
  return (
    <div>
      <WineGlassesListOrganism
        category={'priorat'}
        data={page.spain}
        countryName="SPAIN"
        regionName={'PRIORAT'}
        categoryTitle="WHITE WINES"
      />
      <WineGlassesListOrganism
        category={'canaryIslands'}
        data={page.spain}
        regionName={'CANARY ISLANDS'}
      />
      <WineGlassesListOrganism
        category={'rioja'}
        data={page.spain}
        regionName={'RIOJA'}
      />
      <WineGlassesListOrganism
        category={'riberaDelDuero'}
        data={page.spain}
        regionName={'RIBERA DEL DUERO'}
      />
      <WineGlassesListOrganism
        category={'rueda'}
        data={page.spain}
        regionName={'RUEDA'}
      />
      <WineGlassesListOrganism
        category={'galicia'}
        data={page.spain}
        regionName={'GALICIA'}
      />
      <WineGlassesListOrganism
        category={'catalonia'}
        data={page.spain}
        regionName={'CATALONIA'}
      />
      <WineGlassesListOrganism
        category={'castillaYLeon'}
        data={page.spain}
        regionName={'CASTILLA Y LEON'}
      />
      <WineGlassesListOrganism
        category={'andalusia'}
        data={page.spain}
        regionName={'ANDALUSIA'}
      />
      <WineGlassesListOrganism
        category={'portugal'}
        data={page}
        countryName="PORTUGAL"
      />
      <WineGlassesListOrganism
        category={'hungary'}
        data={page}
        countryName="HUNGARY"
      />
      <WineGlassesListOrganism
        category={'slovenia'}
        data={page}
        countryName="SLOVENIA"
      />
      <WineGlassesListOrganism
        category={'poland'}
        data={page}
        countryName="POLAND"
      />
      <WineGlassesListOrganism
        category={'greece'}
        data={page}
        countryName="GREECE"
      />
    </div>
  );
}

export { WineBottlesSixthPageOrganism };
