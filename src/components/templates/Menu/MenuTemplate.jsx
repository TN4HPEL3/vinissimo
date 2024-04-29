import { Button } from '../../atoms/Button/Button.jsx';
import { SectionTemplate } from '../Section/SectionTemplate.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { MenuListOrganism } from '../../organisms/MenuListOrganism/MenuListOrganism.jsx';

import menu from '../../../data/menu.json';

import css from './MenuTemplate.module.css';

function MenuTemplate() {
  const screen = CheckMediaQuery();
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
              <Button text="wina" />
              <Button text="wina na kieliszki" />
              <Button text="alkohole" />
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
                <option value="winesBottle">wina</option>
                <option value="winesGlasses">wina na kieliszki</option>
                <option value="alcohols">alkohole</option>
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
