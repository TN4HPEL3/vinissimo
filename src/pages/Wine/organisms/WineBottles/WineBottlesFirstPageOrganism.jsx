import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism';

import menu from '../../../../data/wineBottles.json';

function WineBottlesFirstPageOrganism() {
  return (
    <div>
      <WineGlassesListOrganism
        category={'champagne'}
        data={menu.firstPage}
        title={'CUVEE'}
        categoryTitle="C H A M P A G N E"
      />
      <WineGlassesListOrganism
        category={'blancDeNoirs'}
        data={menu.firstPage}
        title={'BLANCS DE NOIRS'}
      />
      <WineGlassesListOrganism
        category={'rose'}
        data={menu.firstPage}
        title={'ROSE'}
      />
      <WineGlassesListOrganism
        category={'blancDeBlancs'}
        data={menu.firstPage}
        title={'BLANC DE BLANCS'}
      />
    </div>
  );
}

export { WineBottlesFirstPageOrganism };
