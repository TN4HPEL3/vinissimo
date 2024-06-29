import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { HashLinkMolecule } from '../../molecules/HashLinkMolecule/HashLinkMolecule.jsx';
import { MobileMenuTemplate } from '../../templates/MobileMenuTemplate/MobileMenuTemplate.jsx';
import { SwitchToENButtonAtom } from '../../atoms/SwitchToENButtonAtom/SwitchToENButtonAtom.jsx';
import { MobileNavigationOrganism } from '../MobileNavigationOrganism/MobileNavigationOrganism.jsx';
import { NavigationLogoMolecule } from '../../molecules/NavigationLogoMolecule/NavigationLogoMolecule.jsx';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule.jsx';

import css from './NavigationListOrganisms.module.css';

function NavigationListOrganisms() {
  const screen = CheckMediaQuery();
  return (
    <div className={css.header__content}>
      <NavigationLogoMolecule />
      <nav className={css.header__navigation}>
        <NavigationListItemMolecule item="" text="home" activeRoutes={['/']} />
        <NavigationListItemMolecule
          item="menu/food"
          text="menu"
          activeRoutes={['/menu/food', '/menu/alcohol']}
        />
        <NavigationListItemMolecule
          item="wine/glasses"
          text="wino"
          activeRoutes={['/wine/glasses', '/wine/bottles']}
        />
        <NavigationListItemMolecule
          item="events"
          text="eventy"
          activeRoutes={['/events']}
        />
        <NavigationListItemMolecule
          item="team"
          text="team"
          activeRoutes={['/team']}
        />
        <HashLinkMolecule item="/#reservation" text="rezerwacja" />
      </nav>
      {screen === 'desktop' ? (
        <SwitchToENButtonAtom />
      ) : (
        <MobileNavigationOrganism />
      )}
      <MobileMenuTemplate />
    </div>
  );
}

export { NavigationListOrganisms };
