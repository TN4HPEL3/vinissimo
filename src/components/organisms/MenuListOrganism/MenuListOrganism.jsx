import { nanoid } from 'nanoid';

import { MenuTitleAtom } from '../../atoms/MenuTitleAtom/MenuTitleAtom.jsx';
import { MenuTextMolecule } from '../../molecules/MenuTextMolecule/MenuTextMolecule.jsx';

import css from './MenuListOrganism.module.css';

function MenuListOrganism({ category, data, title }) {
  const itemsByCategory = data[category];
  const items = itemsByCategory.map(item => {
    const id = nanoid();
    const { firstLineName, secondLineName, price } = item;
    return (
      <li className={css['menu__list-item']} key={id}>
        <div className={css['menu__list-item__text']}>
          <MenuTextMolecule
            text={
              <>
                <b>{firstLineName}</b>
                {secondLineName && ` . ${secondLineName}`}
              </>
            }
          />
        </div>
        <MenuTextMolecule text={price} />
      </li>
    );
  });
  return (
    <>
      <MenuTitleAtom className={css.menu__list__title} title={title} />
      <ul>{items}</ul>
    </>
  );
}

export { MenuListOrganism };
