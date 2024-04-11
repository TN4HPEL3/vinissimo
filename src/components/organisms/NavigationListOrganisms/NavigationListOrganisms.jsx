import { NavigationListItemMolecule } from '../../molecules/NavigationListItemMolecule/NavigationListItemMolecule';

function NavigationListOrganisms() {
  return (
    <div>
      <ul>
        <NavigationListItemMolecule item={'home'} />
        <NavigationListItemMolecule item={'menu'} />
        <NavigationListItemMolecule item={'wino'} />
        <NavigationListItemMolecule item={'eventy'} />
        <NavigationListItemMolecule item={'team'} />
        <NavigationListItemMolecule item={'rezerwacja'} />
      </ul>
    </div>
  );
}

export { NavigationListOrganisms };
