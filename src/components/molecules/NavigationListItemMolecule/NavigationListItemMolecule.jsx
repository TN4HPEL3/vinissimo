import { IconAtom } from '../../atoms/IconAtom/IconAtom.jsx';
import { NavigationListItemAtom } from '../../atoms/NavigationListItemAtom/NavigationListItemAtom.jsx';

import css from '../../atoms/NavigationListItemAtom/NavigationListItemAtom.module.css';

function NavigationListItemMolecule({ item, text, activeRoutes }) {
  const isDegustationButton = item.startsWith('degustat');

  return (
    <>
      <NavigationListItemAtom
        element={item}
        text={
          <>
            {text}
            {isDegustationButton && (
              <IconAtom
                id="champagne"
                className={[css['header__button__icon']]}
              />
            )}
          </>
        }
        activeRoutes={activeRoutes}
      />
    </>
  );
}

export { NavigationListItemMolecule };
