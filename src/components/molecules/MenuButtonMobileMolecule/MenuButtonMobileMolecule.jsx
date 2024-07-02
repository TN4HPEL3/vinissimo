import { useNavigate } from 'react-router-dom';

import { useLanguage } from '../../../helpers/contexts/languageContext.js';

import css from './MenuButtonMobileMolecule.module.css';

function MenuButtonMobileMolecule() {
  const navigate = useNavigate();
  const handleChange = event => {
    navigate(event.target.value);
  };
  const { t } = useLanguage();
  const {
    menuWineBottlesButton,
    menuAlcoholButton,
    menuWineGlassesButton,
    menuMoreButton,
  } = t;
  return (
    <select
      onChange={handleChange}
      defaultValue={menuMoreButton}
      className={css.menu__select}
      id="menuButtons"
      name="menuButtons"
    >
      <option value="/wine/bottles">{menuWineBottlesButton}</option>
      <option value="/wine/glasses">{menuWineGlassesButton}</option>
      <option value="/menu/alcohol">{menuAlcoholButton}</option>
      <option value={menuMoreButton} hidden>
        {menuMoreButton}
      </option>
    </select>
  );
}

export { MenuButtonMobileMolecule };
