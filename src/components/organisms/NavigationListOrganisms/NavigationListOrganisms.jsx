import { useState } from 'react';

import { MobileMenuOrganism } from '../MobileMenuOrganism/MobileMenuOrganism.jsx';
import { OpenMobileMenuButtonAtom } from '../../atoms/OpenMobileMenuButtonAtom/OpenMobileMenuButtonAtom.jsx';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule.jsx';

import css from './NavigationListOrganisms.module.css';

function NavigationListOrganisms() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={css.header__content}>
      <nav className={css.header__navigation}>
        <NavigationListItemMolecule item={'home'} />
        <NavigationListItemMolecule item={'menu'} />
        <NavigationListItemMolecule item={'wino'} />
        <NavigationListItemMolecule item={'eventy'} />
        <NavigationListItemMolecule item={'team'} />
        <NavigationListItemMolecule item={'rezerwacja'} />
      </nav>
      <OpenMobileMenuButtonAtom handleClick={handleClick} />
      {isOpen && <MobileMenuOrganism handleClick={handleClick} />}
    </div>
  );
}

export { NavigationListOrganisms };
