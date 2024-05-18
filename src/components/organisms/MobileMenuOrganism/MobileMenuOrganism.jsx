import { CloseMobileMenuButtonAtom } from '../../atoms/CloseMobileMenuButtonAtom/CloseMobileMenuButtonAtom';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule';

function MobileMenuOrganism({ handleClick }) {
  return (
    <>
      <CloseMobileMenuButtonAtom handleClick={handleClick} />
      <NavigationListItemMolecule item={'home'} />
      <NavigationListItemMolecule item={'menu'} />
      <NavigationListItemMolecule item={'wino'} />
      <NavigationListItemMolecule item={'eventy'} />
      <NavigationListItemMolecule item={'team'} />
      <NavigationListItemMolecule item={'rezerwacja'} />
    </>
  );
}

export { MobileMenuOrganism };
