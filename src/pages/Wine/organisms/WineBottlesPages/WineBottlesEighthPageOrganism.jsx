import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism';

import menu from '../../../../data/wineBottles.json';

function WineBottlesEighthPageOrganism() {
  const page = menu.page8;
  return (
    <div>
      <WineGlassesListOrganism
        category={'pinotNoir'}
        data={page.burgundy}
        countryName="FRANCE"
        regionName="BURGUNDY"
        grapeName="PINOT NOIR"
        categoryTitle="RED WINES"
      />
      <WineGlassesListOrganism
        category={'saintEstephe'}
        data={page.bordeaux}
        countryName="BORDEAUX"
        regionName="SAINT–ESTÈPHE"
      />
      <WineGlassesListOrganism
        category={'pauillac'}
        data={page.bordeaux}
        regionName="PAUILLAC"
      />
      <WineGlassesListOrganism
        category={'saintJulien'}
        data={page.bordeaux}
        regionName="SAINT–JULIEN"
      />
      <WineGlassesListOrganism
        category={'margaux'}
        data={page.bordeaux}
        regionName="MARGAUX"
      />
      <WineGlassesListOrganism
        category={'pessacLeognan'}
        data={page.bordeaux}
        regionName="PESSAC–LEOGNAN"
      />
      <WineGlassesListOrganism
        category={'graves'}
        data={page.bordeaux}
        regionName="GRAVES"
      />
      <WineGlassesListOrganism
        category={'pomerol'}
        data={page.bordeaux}
        regionName="POMEROL"
      />
      <WineGlassesListOrganism
        category={'saintEmilion'}
        data={page.bordeaux}
        regionName="SAINT–EMILION"
      />
      <WineGlassesListOrganism
        category={'southWest'}
        data={page}
        countryName="SOUTH WEST"
      />
      <WineGlassesListOrganism
        category={'rhoneValley'}
        data={page}
        countryName="RHÔNE VALLEY"
      />
      <WineGlassesListOrganism
        category={'langueDocRoussillon'}
        data={page}
        countryName="LANGUEDOC-ROUSSILLON"
      />
    </div>
  );
}

export { WineBottlesEighthPageOrganism };
