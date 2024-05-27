import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/wineBottles.json';

function WineBottlesEleventhPageOrganism() {
  const page = menu.page11;
  return (
    <div>
      <WineGlassesListOrganism
        category={'portugal'}
        data={page}
        countryName="PORTUGAL"
        categoryTitle="RED WINES"
      />
      <WineGlassesListOrganism
        category={'austria'}
        data={page}
        countryName="AUSTRIA"
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
        category={'germany'}
        data={page}
        countryName="GERMANY"
      />
      <WineGlassesListOrganism
        category={'hungary'}
        data={page}
        countryName="HUNGARY"
      />
      <WineGlassesListOrganism
        category={'moldova'}
        data={page}
        countryName="MOLDOVA"
      />
      <WineGlassesListOrganism
        category={'lebanon'}
        data={page}
        countryName="LEBANON"
        categoryTitle="NEW WORLD"
      />
      <WineGlassesListOrganism category={'usa'} data={page} countryName="USA" />
      <WineGlassesListOrganism
        category={'argentina'}
        data={page}
        countryName="ARGENTINA"
      />
      <WineGlassesListOrganism
        category={'australia'}
        data={page}
        countryName="AUSTRALIA"
      />
      <WineGlassesListOrganism
        category={'newZealand'}
        data={page}
        countryName="NEW ZEALAND"
      />
      <WineGlassesListOrganism
        category={'chile'}
        data={page}
        countryName="CHILE"
      />
      <WineGlassesListOrganism
        category={'uruguay'}
        data={page}
        countryName="URUGUAY"
      />
    </div>
  );
}

export { WineBottlesEleventhPageOrganism };
