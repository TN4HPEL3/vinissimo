import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/wineBottles.json';

function WineBottlesFourthPageOrganism() {
  const page = menu.page4;
  return (
    <div>
      <WineGlassesListOrganism
        category={'piedmont'}
        data={page}
        countryName="ITALY"
        regionName="PIEDMONT"
        categoryTitle="WHITE WINES"
      />
      <WineGlassesListOrganism
        category={'altoAdige'}
        data={page}
        regionName="ALTO ADIGE"
      />
      <WineGlassesListOrganism
        category={'marche'}
        data={page}
        regionName="MARCHE"
      />
      <WineGlassesListOrganism
        category={'friuliVeneziaGiulia'}
        data={page}
        regionName="FRIULI–VENEZIA GIULIA"
      />
      <WineGlassesListOrganism
        category={'campania'}
        data={page}
        regionName="CAMPANIA"
      />
      <WineGlassesListOrganism
        category={'tuscany'}
        data={page}
        regionName="TOSCANY"
      />
      <WineGlassesListOrganism
        category={'lazio'}
        data={page}
        regionName="LAZIO"
      />
    </div>
  );
}

export { WineBottlesFourthPageOrganism };
