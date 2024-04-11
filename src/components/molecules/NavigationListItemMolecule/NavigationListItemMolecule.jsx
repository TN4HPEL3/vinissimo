import { NavigationListItemAtom } from '../../atoms/NavigationListItemAtom/NavigationListItemAtom';

function NavigationListItemMolecule({ item }) {
  return (
    <li>
      <NavigationListItemAtom element={item} />
    </li>
  );
}

export { NavigationListItemMolecule };
