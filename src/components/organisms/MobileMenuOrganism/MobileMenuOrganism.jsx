import { HashLinkMolecule } from '../../molecules/HashLinkMolecule/HashLinkMolecule.jsx';
import { CloseMobileMenuButtonAtom } from '../../atoms/CloseMobileMenuButtonAtom/CloseMobileMenuButtonAtom.jsx';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule.jsx';

function MobileMenuOrganism() {
  return (
    <>
      <CloseMobileMenuButtonAtom />
      <NavigationListItemMolecule item="" text="home" activeRoutes={['']} />
      <NavigationListItemMolecule
        item="menu/food"
        text="menu"
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="wine/glasses"
        text="wino"
        activeRoutes={['']}
      />
      <NavigationListItemMolecule
        item="events"
        text="eventy"
        activeRoutes={['']}
      />
      <NavigationListItemMolecule item="team" text="team" activeRoutes={['']} />
      <HashLinkMolecule item="/#reservation" text="rezerwacja" />
    </>
  );
}

export { MobileMenuOrganism };
