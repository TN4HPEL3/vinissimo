import { CloseMobileMenuButtonAtom } from '../../atoms/CloseMobileMenuButtonAtom/CloseMobileMenuButtonAtom';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule';

import css from './MobileMenuOrganism.module.css';

function MobileMenuOrganism({ handleClick, isOpen }) {
  return (
    <>
      <nav
        className={`${css['mobile-menu']} ${
          isOpen ? css['mobile-menu--open'] : ''
        }`}
      >
        <CloseMobileMenuButtonAtom handleClick={handleClick} />
        <NavigationListItemMolecule item={'home'} />
        <NavigationListItemMolecule item={'menu'} />
        <NavigationListItemMolecule item={'wino'} />
        <NavigationListItemMolecule item={'eventy'} />
        <NavigationListItemMolecule item={'team'} />
        <NavigationListItemMolecule item={'rezerwacja'} />
      </nav>
    </>
  );
}

export { MobileMenuOrganism };
