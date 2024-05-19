import { NavigationListItemAtom } from '../../atoms/NavigationListItemAtom/NavigationListItemAtom';

function NavigationListItemMolecule({ item, text }) {
  return (
    <>
      <NavigationListItemAtom element={item} text={text} />
    </>
  );
}

export { NavigationListItemMolecule };
