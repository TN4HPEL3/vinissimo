import { CloseMobileMenuButtonAtom } from '../../atoms/CloseMobileMenuButtonAtom/CloseMobileMenuButtonAtom';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule';

function MobileMenuOrganism({ handleClick }) {
  return (
    <>
      <CloseMobileMenuButtonAtom handleClick={handleClick} />
      <NavigationListItemMolecule item="home" text="home" />
      <NavigationListItemMolecule item="menu/food" text="menu" />
      <NavigationListItemMolecule item="wine/glasses" text="wino" />
      <NavigationListItemMolecule item="events" text="eventy" />
      <NavigationListItemMolecule item="team" text="team" />
      <NavigationListItemMolecule item="reservation" text="rezerwacja" />
    </>
  );
}

export { MobileMenuOrganism };
