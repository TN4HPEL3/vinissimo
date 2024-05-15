import css from './MenuButtonMobileMolecule.module.css';

function MenuButtonMobileMolecule({
  handleChange,
  winesBottlesBtnText,
  wineGlassBtnText,
  alcoholBtnText,
}) {
  return (
    <select
      onChange={handleChange}
      defaultValue="more"
      className={css.menu__select}
      id="menuButtons"
      name="menuButtons"
    >
      <option value="winesBottles">{winesBottlesBtnText}</option>
      <option value="winesGlasses">{wineGlassBtnText}</option>
      <option value="alcohols">{alcoholBtnText}</option>
      <option value="more" hidden>
        więcej
      </option>
    </select>
  );
}

export { MenuButtonMobileMolecule };
