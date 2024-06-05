import { HashLinkMolecule } from '../../molecules/HashLinkMolecule/HashLinkMolecule.jsx';
import { CloseMobileMenuButtonAtom } from '../../atoms/CloseMobileMenuButtonAtom/CloseMobileMenuButtonAtom.jsx';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule.jsx';

function MobileMenuOrganism() {
  return (
    <>
      <CloseMobileMenuButtonAtom />
      <NavigationListItemMolecule item="" text="home" />
      <NavigationListItemMolecule item="menu/food" text="menu" />
      <NavigationListItemMolecule item="wine/glasses" text="wino" />
      <NavigationListItemMolecule item="events" text="eventy" />
      <NavigationListItemMolecule item="team" text="team" />
      <HashLinkMolecule item="/#reservation" text="rezerwacja" />
    </>
  );
}

export { MobileMenuOrganism };
