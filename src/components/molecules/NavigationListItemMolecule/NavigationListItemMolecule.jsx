import { IconAtom } from '../../atoms/IconAtom/IconAtom.jsx';
import { NavigationListItemAtom } from '../../atoms/NavigationListItemAtom/NavigationListItemAtom.jsx';

import css from '../../atoms/NavigationListItemAtom/NavigationListItemAtom.module.css';

function NavigationListItemMolecule({ item, text, activeRoutes }) {
  const isNewYearButton = item.startsWith('new-year');

  return (
    <>
      <NavigationListItemAtom
        element={item}
        text={
          <>
            {text}
            {isNewYearButton && (
              <IconAtom
                id="wine-glasses"
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
