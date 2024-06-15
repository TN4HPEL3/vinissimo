import {
  volumeBottle,
  volumeLargeGlass,
  volumeSmallGlass,
} from '../../../../helpers/wineVolumes.js';
import { WineGlassesListOrganism } from '../WinePageListOrganism/WineGlassesListOrganism.jsx';

import menu from '../../../../data/winesGlasses.json';

function WineGlassesFirstPageOrganism() {
  return (
    <div>
      <WineGlassesListOrganism
        volumeFirst="100 ml"
        volumeSecond="|"
        volumeThird="750 ml"
        category={'bubbles'}
        data={menu}
        title={'bubbles by the glass | bąble na kieliszek'}
      />
      <WineGlassesListOrganism
        volumeFirst={volumeSmallGlass}
        volumeSecond={volumeLargeGlass}
        volumeThird={volumeBottle}
        category={'orangeAndOxidizedWines'}
        data={menu}
        title={
          'orange&oxidized wines by the glass | wina utlenione&pomarańczowe na kieliszek'
        }
      />
      <WineGlassesListOrganism
        volumeFirst={volumeSmallGlass}
        volumeSecond={volumeLargeGlass}
        volumeThird={volumeBottle}
        category={'roseWines'}
        data={menu}
        title={'rosé wines by the glass | wina różowe na kieliszek'}
      />
      <WineGlassesListOrganism
        volumeFirst="75 ml |"
        volumeSecond="150 ml"
        volumeThird={volumeBottle}
        category={'sweetAndFortifiedWines'}
        data={menu}
        title={
          'sweet and fortified wines by the glass | wina słodkie i wzmacniane na kieliszek'
        }
      />
      <WineGlassesListOrganism
        volumeFirst="250 ml"
        volumeSecond="|"
        volumeThird="750 ml"
        category={'nonAlcoholicWines'}
        data={menu}
        title={
          'non-alcoholic wines by the glass | wina bezalkoholowe na kieliszek'
        }
      />
    </div>
  );
}

export { WineGlassesFirstPageOrganism };
