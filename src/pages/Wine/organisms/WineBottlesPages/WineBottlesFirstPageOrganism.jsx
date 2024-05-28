import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism';

import menu from '../../../../data/wineBottles.json';

function WineBottlesFirstPageOrganism() {
  return (
    <div>
      <WineGlassesListOrganism
        category={'champagne'}
        data={menu.page1}
        title={'CUVEE'}
        categoryTitle="CHAMPAGNE"
      />
      <WineGlassesListOrganism
        category={'blancDeNoirs'}
        data={menu.page1}
        title={'BLANCS DE NOIRS'}
      />
      <WineGlassesListOrganism
        category={'rose'}
        data={menu.page1}
        title={'ROSE'}
      />
      <WineGlassesListOrganism
        category={'blancDeBlancs'}
        data={menu.page1}
        title={'BLANC DE BLANCS'}
      />
    </div>
  );
}

export { WineBottlesFirstPageOrganism };
