import { NavigationListItemAtom } from '../../atoms/NavigationListItemAtom/NavigationListItemAtom.jsx';

function NavigationListItemMolecule({ item, text, activeRoutes }) {
  return (
    <>
      <NavigationListItemAtom
        element={item}
        text={<>{text}</>}
        activeRoutes={activeRoutes}
      />
    </>
  );
}

export { NavigationListItemMolecule };
