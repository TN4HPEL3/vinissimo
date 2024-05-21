import { nanoid } from 'nanoid';

import { MenuTitleAtom } from '../../../../components/atoms/MenuTitleAtom/MenuTitleAtom';
import { MenuTextMolecule } from '../../../../components/molecules/MenuTextMolecule/MenuTextMolecule';

import css from './WineGlassesListOrganism.module.css';

function WineGlassesListOrganism({
  category,
  data,
  title,
  volumeFirst,
  volumeSecond,
  volumeThird,
  categoryTitle,
}) {
  const itemsByCategory = data[category];
  const items = itemsByCategory.map(item => {
    const id = nanoid();
    const {
      isActive,
      name,
      description,
      priceGlass,
      priceBigGlass,
      priceBottle,
      year,
    } = item;
    return isActive ? (
      <li key={id} className={css.wine__list__item}>
        {year ? (
          <div className={css['wine__list__name--bottle']}>
            <MenuTextMolecule text={year} />
            <div>
              <MenuTextMolecule text={name} />
              <MenuTextMolecule text={description} />
            </div>
          </div>
        ) : (
          <div className={css['wine__list__name--glass']}>
            <MenuTextMolecule text={name} />
            <MenuTextMolecule text={description} />
          </div>
        )}

        <div
          className={
            year ? css['wine__list__price--bottle'] : css.wine__list__price
          }
        >
          <MenuTextMolecule text={priceGlass} />
          <MenuTextMolecule text={priceBigGlass} />
          <MenuTextMolecule text={priceBottle} />
        </div>
      </li>
    ) : null;
  });
  return (
    <>
      <MenuTitleAtom
        className={css['wine__category-name']}
        title={categoryTitle}
      />
      <MenuTitleAtom className={css.wine__title} title={title} />
      <ul className={css.wine__list}>
        <div className={css.wine__volume}>
          <MenuTextMolecule text={volumeFirst} />
          <MenuTextMolecule text={volumeSecond} />
          <MenuTextMolecule text={volumeThird} />
        </div>
        {items}
      </ul>
    </>
  );
}

export { WineGlassesListOrganism };
