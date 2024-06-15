import {
  volumeBottle,
  volumeLargeGlass,
  volumeSmallGlass,
} from '../../../../helpers/wineVolumes.js';
import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/winesGlasses.json';

function WineGlassesSecondPageOrganism() {
  return (
    <div>
      <WineGlassesListOrganism
        volumeFirst={volumeSmallGlass}
        volumeSecond={volumeLargeGlass}
        volumeThird={volumeBottle}
        category={'whiteWines'}
        data={menu}
        title={'white wines by the glass | wina białe na kieliszek'}
      />
    </div>
  );
}

export { WineGlassesSecondPageOrganism };
