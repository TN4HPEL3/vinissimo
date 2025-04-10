import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { HashLinkMolecule } from '../../molecules/HashLinkMolecule/HashLinkMolecule.jsx';
import { MobileMenuTemplate } from '../../templates/MobileMenuTemplate/MobileMenuTemplate.jsx';
import { MobileNavigationOrganism } from '../MobileNavigationOrganism/MobileNavigationOrganism.jsx';
import { NavigationLogoMolecule } from '../../molecules/NavigationLogoMolecule/NavigationLogoMolecule.jsx';
import { SwitchLanguageButtonAtom } from '../../atoms/SwitchLanguageButtonAtom/SwitchLanguageButtonAtom.jsx';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule.jsx';

import css from './NavigationListOrganisms.module.css';
import { IconAtom } from '../../atoms/IconAtom/IconAtom.jsx';

function NavigationListOrganisms() {
  const screen = CheckMediaQuery();
  const { t } = useLanguage();
  const {
    navigationHome,
    navigationMenu,
    navigationWine,
    navigationEvents,
    navigationTeam,
    navigationReservation,
    navigationEaster,
  } = t;
  return (
    <div className={css.header__content}>
      <NavigationLogoMolecule />
      <nav className={css.header__navigation}>
        <NavigationListItemMolecule
          item=""
          text={navigationHome}
          activeRoutes={['/']}
        />
        <NavigationListItemMolecule
          item="easter"
          text={
            <>
              {navigationEaster}
              <IconAtom id="easter" className={css.header__icon} />
            </>
          }
          activeRoutes={['/easter']}
        />
        <NavigationListItemMolecule
          item="menu/food"
          text={navigationMenu}
          activeRoutes={['/menu/food', '/menu/alcohol']}
        />
        <NavigationListItemMolecule
          item="wine/glasses"
          text={navigationWine}
          activeRoutes={['/wine/glasses', '/wine/bottles']}
        />
        <NavigationListItemMolecule
          item="events"
          text={navigationEvents}
          activeRoutes={['/events']}
        />
        <NavigationListItemMolecule
          item="team"
          text={navigationTeam}
          activeRoutes={['/team']}
        />
        <HashLinkMolecule item="/#reservation" text={navigationReservation} />
      </nav>
      {screen === 'desktop' ? (
        <SwitchLanguageButtonAtom />
      ) : (
        <MobileNavigationOrganism />
      )}
      <MobileMenuTemplate />
    </div>
  );
}

export { NavigationListOrganisms };
