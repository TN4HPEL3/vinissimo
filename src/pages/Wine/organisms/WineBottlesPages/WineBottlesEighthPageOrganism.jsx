import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/wineBottles.json';

function WineBottlesEighthPageOrganism() {
  const page = menu.page8;
  return (
    <div>
      <WineGlassesListOrganism
        category={'burgundy'}
        data={page}
        countryName="FRANCE"
        regionName="BURGUNDY"
        categoryTitle="RED WINES"
      />
      <WineGlassesListOrganism
        category={'jura'}
        data={page}
        regionName="JURA"
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
        category={'loireValley'}
        data={page}
        countryName="LOIRE VALLEY"
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
      <WineGlassesListOrganism
        category={'provence'}
        data={page}
        countryName="PROVENCE"
      />
    </div>
  );
}

export { WineBottlesEighthPageOrganism };
