import { IconAtom } from '../../atoms/IconAtom/IconAtom.jsx';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { HashLinkMolecule } from '../../molecules/HashLinkMolecule/HashLinkMolecule.jsx';
import { CloseMobileMenuButtonAtom } from '../../atoms/CloseMobileMenuButtonAtom/CloseMobileMenuButtonAtom.jsx';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule.jsx';

import css from '../NavigationListOrganisms/NavigationListOrganisms.module.css';

function MobileMenuOrganism() {
  const { t } = useLanguage();
  const {
    navigationValentines,
    navigationHome,
    navigationMenu,
    navigationWine,
    navigationEvents,
    navigationTeam,
    navigationReservation,
  } = t;
  return (
    <>
      <CloseMobileMenuButtonAtom />
      <NavigationListItemMolecule
        item=""
        text={navigationHome}
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="valentine"
        text={
          <>
            {navigationValentines}{' '}
            <IconAtom id="hearts" className={css.header_icon} />
          </>
        }
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="menu/food"
        text={navigationMenu}
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="wine/glasses"
        text={navigationWine}
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="events"
        text={navigationEvents}
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="team"
        text={navigationTeam}
        activeRoutes={['']}
      />
      <HashLinkMolecule item="/#reservation" text={navigationReservation} />
    </>
  );
}

export { MobileMenuOrganism };
