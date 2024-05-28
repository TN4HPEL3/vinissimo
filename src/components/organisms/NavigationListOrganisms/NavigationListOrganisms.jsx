import { HashLinkMolecule } from '../../molecules/HashLinkMolecule/HashLinkMolecule.jsx';
import { MobileMenuTemplate } from '../../templates/MobileMenuTemplate/MobileMenuTemplate.jsx';
import { NavigationLogoMolecule } from '../../molecules/NavigationLogoMolecule/NavigationLogoMolecule.jsx';
import { OpenMobileMenuButtonAtom } from '../../atoms/OpenMobileMenuButtonAtom/OpenMobileMenuButtonAtom.jsx';
import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule.jsx';

import css from './NavigationListOrganisms.module.css';

function NavigationListOrganisms() {
  return (
    <div className={css.header__content}>
      <NavigationLogoMolecule />
      <nav className={css.header__navigation}>
        <NavigationListItemMolecule item="" text="home" />
        <NavigationListItemMolecule item="menu/food" text="menu" />
        <NavigationListItemMolecule item="wine/glasses" text="wino" />
        <NavigationListItemMolecule item="events" text="eventy" />
        <NavigationListItemMolecule item="team" text="team" />
        <HashLinkMolecule item="/#reservation" text="rezerwacja" />
      </nav>
      <OpenMobileMenuButtonAtom />
      <MobileMenuTemplate />
    </div>
  );
}

export { NavigationListOrganisms };
