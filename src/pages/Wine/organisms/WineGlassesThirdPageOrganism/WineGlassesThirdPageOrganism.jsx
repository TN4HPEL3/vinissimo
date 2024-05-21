import {
  volumeBottle,
  volumeLargeGlass,
  volumeSmallGlass,
} from '../../../../helpers/wineVolumes';
import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism';

import menu from '../../../../data/winesGlasses.json';

function WineGlassesThirdPageOrganism() {
  return (
    <div>
      <WineGlassesListOrganism
        volumeFirst={volumeSmallGlass}
        volumeSecond={volumeLargeGlass}
        volumeThird={volumeBottle}
        category={'redWines'}
        data={menu}
        title={'red wines by the glass | wina czerwone na kieliszek'}
      />
    </div>
  );
}

export { WineGlassesThirdPageOrganism };
