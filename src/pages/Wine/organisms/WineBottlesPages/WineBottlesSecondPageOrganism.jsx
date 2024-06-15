import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/wineBottles.json';

function WineBottlesSecondPageOrganism() {
  const page = menu.page2;
  return (
    <div>
      <WineGlassesListOrganism
        category={'sparklingWines'}
        data={page}
        categoryTitle="SPARKLING WINES"
      />
    </div>
  );
}

export { WineBottlesSecondPageOrganism };
