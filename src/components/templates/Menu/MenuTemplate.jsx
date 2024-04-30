import { Button } from '../../atoms/Button/Button.jsx';
import { SectionTemplate } from '../Section/SectionTemplate.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { MenuListOrganism } from '../../organisms/MenuListOrganism/MenuListOrganism.jsx';

import menu from '../../../data/menu.json';

import css from './MenuTemplate.module.css';

function MenuTemplate() {
  const screen = CheckMediaQuery();
  const wineBottleBtnText = 'wina';
  const alcoholBtnText = 'alkohole';
  const wineGlassBtnText = 'wina na kieliszki';
  const soups = MenuListOrganism('soups', menu, 'zupa');
  const sides = MenuListOrganism('sides', menu, 'dodatki');
  const cheeses = MenuListOrganism('cheeses', menu, 'sery');
  const mains = MenuListOrganism('mains', menu, 'dania główne');
  const desserts = MenuListOrganism('desserts', menu, 'na słodko');
  const starters = MenuListOrganism('starters', menu, 'przystawki');

  const handleChange = event => {
    console.log(event.target.value);
  };

  return (
    <SectionTemplate title="menu">
      <div className={css.menu}>
        <div className={css.menu__content}>
          <div>
            {starters}
            {cheeses}
            {soups}
          </div>
          <div>
            {mains}
            {sides}
            {desserts}
          </div>
        </div>
        <div className={css.menu__buttons}>
          {screen === 'desktop' ? (
            <>
              <Button text={wineBottleBtnText} />
              <Button text={alcoholBtnText} />
              <Button text={wineGlassBtnText} />
            </>
          ) : (
            <>
              <select
                onChange={handleChange}
                defaultValue="more"
                className={css.menu__select}
                id="menuButtons"
                name="menuButtons"
              >
                <option value="winesBottle">{wineBottleBtnText}</option>
                <option value="winesGlasses">{wineGlassBtnText}</option>
                <option value="alcohols">{alcoholBtnText}</option>
                <option value="more" hidden>
                  więcej
                </option>
              </select>
            </>
          )}
        </div>
      </div>
    </SectionTemplate>
  );
}

export { MenuTemplate };
