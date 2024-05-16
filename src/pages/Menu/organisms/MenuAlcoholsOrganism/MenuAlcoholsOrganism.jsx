import { nanoid } from 'nanoid';

import { MenuTitleAtom } from '../../../../components/atoms/MenuTitleAtom/MenuTitleAtom';
import { MenuTextMolecule } from '../../../../components/molecules/MenuTextMolecule/MenuTextMolecule';

import css from './MenuAlcoholsOrganism.module.css';

function MenuAlcoholsOrganism({ category, data, title }) {
  const itemsByCategory = data[category];
  const items = itemsByCategory.map(item => {
    const id = nanoid();
    const { name, descriptionSecondLine, descriptionThirdLine, isActive } =
      item;
    return isActive ? (
      <li className={css['menu__list-item']} key={id}>
        <div>
          <MenuTextMolecule text={name} />
          <MenuTextMolecule text={descriptionSecondLine} />
          <MenuTextMolecule text={descriptionThirdLine} />
        </div>
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

export { MenuAlcoholsOrganism };
