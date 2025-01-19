import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/wineBottles.json';

function WineBottlesFifthPageOrganism() {
  const page = menu.page5;
  return (
    <div>
      <WineGlassesListOrganism
        category={'pfalz'}
        data={page.germany}
        countryName="GERMANY"
        regionName="PFALZ"
        categoryTitle="WHITE WINES"
      />
      <WineGlassesListOrganism
        category={'nahe'}
        data={page.germany}
        regionName="NAHE"
      />
      <WineGlassesListOrganism
        category={'mosel'}
        data={page.germany}
        regionName="MOSEL"
      />
      <WineGlassesListOrganism
        category={'rheinhessen'}
        data={page.germany}
        regionName="RHEINHESSEN"
      />
      <WineGlassesListOrganism
        category={'austria'}
        data={page}
        countryName="AUSTRIA"
      />
      <WineGlassesListOrganism
        category={'serbia'}
        data={page}
        countryName="SERBIA"
      />
      <WineGlassesListOrganism
        category={'georgia'}
        data={page}
        countryName="GEORGIA"
      />
    </div>
  );
}

export { WineBottlesFifthPageOrganism };
