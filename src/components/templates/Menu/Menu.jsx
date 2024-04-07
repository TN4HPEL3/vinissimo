import { Icon } from '../../atoms/Icon/Icon.jsx';
import { Section } from '../Section/Section.jsx';
import { Button } from '../../atoms/Button/Button.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { MenuListOrganism } from '../../../pages/Home/organisms/MenuListOrganism.jsx';

import menu from '../../../data/menu.json';

import css from './Menu.module.css';

function Menu() {
  const screen = CheckMediaQuery();
  const soups = MenuListOrganism('soups', menu, 'zupa');
  const sides = MenuListOrganism('sides', menu, 'dodatki');
  const cheeses = MenuListOrganism('cheeses', menu, 'sery');
  const mains = MenuListOrganism('mains', menu, 'dania główne');
  const desserts = MenuListOrganism('desserts', menu, 'na słodko');
  const starters = MenuListOrganism('starters', menu, 'przystawki');

  return (
    <Section title="menu">
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
            <Button
              text={<span>Więcej</span>}
              icon={<Icon id="arrow-down" />}
            />
          )}
        </div>
      </div>
    </Section>
  );
}

export { Menu };