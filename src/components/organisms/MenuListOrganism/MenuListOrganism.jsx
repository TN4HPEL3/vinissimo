import { nanoid } from 'nanoid';

import { ParagraphAtom } from '../../atoms/ParagraphAtom';

import css from './MenuListOrganism.module.css';

function MenuListOrganism(category, data, title) {
  const itemsByCategory = data[category];
  const items = itemsByCategory.map(item => {
    const id = nanoid();
    const { firstLineName, secondLineName, thirdLineName, price, isActive } =
      item;
    return isActive ? (
      <li className={css['menu__list-item']} key={id}>
        <div>
          <ParagraphAtom text={firstLineName} />
          {secondLineName && <ParagraphAtom text={secondLineName} />}
          {thirdLineName && <ParagraphAtom text={thirdLineName} />}
        </div>
        <ParagraphAtom text={price} />
      </li>
    ) : null;
  });
  return (
    <>
      <h3>{title}</h3>
      <ul>{items}</ul>
    </>
  );
}

export { MenuListOrganism };
