import { useState } from 'react';

import { toggle } from '../../../helpers/toggle.js';
import { MobileMenuTemplate } from '../../templates/MobileMenuTemplate/MobileMenuTemplate.jsx';
import { NavigationLogoMolecule } from '../../molecules/NavigationLogoMolecule/NavigationLogoMolecule.jsx';
import { OpenMobileMenuButtonAtom } from '../../atoms/OpenMobileMenuButtonAtom/OpenMobileMenuButtonAtom.jsx';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule.jsx';

import css from './NavigationListOrganisms.module.css';

function NavigationListOrganisms() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    toggle(isOpen, setIsOpen);
  };
  return (
    <div className={css.header__content}>
      <NavigationLogoMolecule />
      <nav className={css.header__navigation}>
        <NavigationListItemMolecule item="home" text="home" />
        <NavigationListItemMolecule item="menu/food" text="menu" />
        <NavigationListItemMolecule item="wine/glasses" text="wino" />
        <NavigationListItemMolecule item="events" text="eventy" />
        <NavigationListItemMolecule item="team" text="team" />
        <NavigationListItemMolecule item="reservation" text="rezerwacja" />
      </nav>
      <OpenMobileMenuButtonAtom handleClick={toggleMenu} />
      <MobileMenuTemplate isOpen={isOpen} handleClick={toggleMenu} />
    </div>
  );
}

export { NavigationListOrganisms };
