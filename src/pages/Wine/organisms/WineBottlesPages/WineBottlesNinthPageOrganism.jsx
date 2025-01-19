import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/wineBottles.json';

function WineBottlesNinthPageOrganism() {
  const page = menu.page9;
  return (
    <div>
      <WineGlassesListOrganism
        category={'friuliVeneziaGiulia'}
        data={page}
        countryName="ITALY"
        regionName="FRIULI–VENEZIA GULIA"
        categoryTitle="RED WINES"
      />
      <WineGlassesListOrganism
        category={'piedmont'}
        data={page}
        regionName="PIEDMONT"
      />
      <WineGlassesListOrganism
        category={'tuscany'}
        data={page}
        regionName="TUSCANY"
      />
      <WineGlassesListOrganism
        category={'lombardy'}
        data={page}
        regionName="LOMBARDY"
      />
      <WineGlassesListOrganism
        category={'puglia'}
        data={page}
        regionName="PUGLIA"
      />
      <WineGlassesListOrganism
        category={'trentinoAltoAdige'}
        data={page}
        regionName="TRENTINO – ALTO ADIGE"
      />
      <WineGlassesListOrganism
        category={'veneto'}
        data={page}
        regionName="VENETO"
      />
      <WineGlassesListOrganism
        category={'marche'}
        data={page}
        regionName="MARCHE"
      />
      <WineGlassesListOrganism
        category={'sicily'}
        data={page}
        regionName="SICILY"
      />
    </div>
  );
}

export { WineBottlesNinthPageOrganism };
