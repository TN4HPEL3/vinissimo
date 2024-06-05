import { nanoid } from 'nanoid';

import { MenuTitleAtom } from '../../atoms/MenuTitleAtom/MenuTitleAtom.jsx';
import { MenuTextMolecule } from '../../molecules/MenuTextMolecule/MenuTextMolecule.jsx';

import css from './MenuListOrganism.module.css';

function MenuListOrganism({ category, data, title }) {
  const itemsByCategory = data[category];
  const items = itemsByCategory.map(item => {
    const id = nanoid();
    const { firstLineName, secondLineName, thirdLineName, price, isActive } =
      item;
    return isActive ? (
      <li className={css['menu__list-item']} key={id}>
        <div>
          <MenuTextMolecule text={firstLineName} />
          <MenuTextMolecule text={secondLineName} />
          <MenuTextMolecule text={thirdLineName} />
        </div>
        <MenuTextMolecule text={price} />
      </li>
    ) : null;
  });
  return (
    <>
      <MenuTitleAtom title={title} />
      <ul>{items}</ul>
    </>
  );
}

export { MenuListOrganism };
