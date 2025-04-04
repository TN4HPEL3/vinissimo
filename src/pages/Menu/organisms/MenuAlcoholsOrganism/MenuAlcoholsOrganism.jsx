import { nanoid } from 'nanoid';

import { MenuTitleAtom } from '../../../../components/atoms/MenuTitleAtom/MenuTitleAtom.jsx';
import { MenuTextMolecule } from '../../../../components/molecules/MenuTextMolecule/MenuTextMolecule.jsx';

import css from './MenuAlcoholsOrganism.module.css';

function MenuAlcoholsOrganism({ category, data, title }) {
  const itemsByCategory = data[category];
  const items = itemsByCategory.map(item => {
    const id = nanoid();
    const { name, price } = item;
    return (
      <li key={id} className={css.alcohols__list__item}>
        <MenuTextMolecule text={name} />
        <MenuTextMolecule text={price} />
      </li>
    );
  });
  return (
    <>
      <MenuTitleAtom title={title} />
      <ul className={css.alcohols__list}>{items}</ul>
    </>
  );
}

export { MenuAlcoholsOrganism };
