import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule';

import css from './NavigationListOrganisms.module.css';

function NavigationListOrganisms() {
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
    </div>
  );
}

export { NavigationListOrganisms };
