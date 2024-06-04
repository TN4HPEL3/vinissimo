import { NavigationListItemAtom } from '../../atoms/NavigationListItemAtom/NavigationListItemAtom.jsx';

function NavigationListItemMolecule({ item, text }) {
  return (
    <>
      <NavigationListItemAtom element={item} text={text} />
    </>
  );
}

export { NavigationListItemMolecule };
