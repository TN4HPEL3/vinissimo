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
        title={'SPARKLING WINES'}
      />
      <WineGlassesListOrganism
        volumeFirst={volumeSmallGlass}
        volumeSecond={volumeLargeGlass}
        volumeThird={volumeBottle}
        category={'orangeAndOxidizedWines'}
        data={menu}
        title={'ORANGE AND OXIDIZED WINES'}
      />
      <WineGlassesListOrganism
        volumeFirst={volumeSmallGlass}
        volumeSecond={volumeLargeGlass}
        volumeThird={volumeBottle}
        category={'roseWines'}
        data={menu}
        title={'ROSE'}
      />
      <WineGlassesListOrganism
        volumeFirst="75 ml |"
        volumeSecond="150 ml"
        volumeThird={volumeBottle}
        category={'sweetAndFortifiedWines'}
        data={menu}
        title={'SWEET AND FORTIFIED WINES'}
      />
      <WineGlassesListOrganism
        volumeFirst="250 ml"
        volumeSecond="|"
        volumeThird="750 ml"
        category={'nonAlcoholicWines'}
        data={menu}
        title={'ALCOHOL FREE'}
      />
    </div>
  );
}

export { WineGlassesFirstPageOrganism };
