import { nanoid } from 'nanoid';

import { MenuTitleAtom } from '../../../../components/atoms/MenuTitleAtom/MenuTitleAtom.jsx';
import { MenuTextMolecule } from '../../../../components/molecules/MenuTextMolecule/MenuTextMolecule.jsx';

function MenuAlcoholsOrganism({ category, data, title }) {
  const itemsByCategory = data[category];
  const items = itemsByCategory.map(item => {
    const id = nanoid();
    const { name, descriptionSecondLine, descriptionThirdLine, isActive } =
      item;
    return isActive ? (
      <li key={id}>
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
