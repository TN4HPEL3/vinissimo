import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { HashLinkMolecule } from '../../molecules/HashLinkMolecule/HashLinkMolecule.jsx';
import { CloseMobileMenuButtonAtom } from '../../atoms/CloseMobileMenuButtonAtom/CloseMobileMenuButtonAtom.jsx';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule.jsx';

function MobileMenuOrganism() {
  const { t } = useLanguage();
  return (
    <>
      <CloseMobileMenuButtonAtom />
      <NavigationListItemMolecule
        item=""
        text={t.navigationHome}
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="menu/food"
        text={t.navigationMenu}
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="wine/glasses"
        text={t.navigationWine}
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="events"
        text={t.navigationEvents}
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="team"
        text={t.navigationTeam}
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="valentine"
        text={t.navigationValentines}
        activeRoutes={['/valentine']}
      />
      <HashLinkMolecule item="/#reservation" text={t.navigationReservation} />
    </>
  );
}

export { MobileMenuOrganism };
