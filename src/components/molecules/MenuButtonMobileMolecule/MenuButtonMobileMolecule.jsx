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
      <option value="/wine/bottles">{winesBottlesBtnText}</option>
      <option value="/wine/glasses">{wineGlassBtnText}</option>
      <option value="/menu/alcohol">{alcoholBtnText}</option>
      <option value="more" hidden>
        więcej
      </option>
    </select>
  );
}

export { MenuButtonMobileMolecule };
