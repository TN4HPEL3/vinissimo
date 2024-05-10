import { NavigationListItemAtom } from '../../atoms/NavigationListItemAtom/NavigationListItemAtom';

function NavigationListItemMolecule({ item }) {
  return (
    <>
      <NavigationListItemAtom element={item} />
    </>
  );
}

export { NavigationListItemMolecule };
