import { MenuPageButtonMolecule } from '../../../Menu/molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule.jsx';

import css from '../../../Menu/organisms/MenuPageButtonsOrganism/MenuPageButtonsOrganism.module.css';

function WinePageButtonsOrganism() {
  return (
    <div className={css.menu__buttons}>
      <MenuPageButtonMolecule
        link="/wine/glasses"
        buttonText="wina na kieliszki"
      />
      <MenuPageButtonMolecule
        link="/wine/bottles"
        buttonText="wina na butelki"
      />
    </div>
  );
}

export { WinePageButtonsOrganism };
