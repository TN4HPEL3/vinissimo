import { nanoid } from 'nanoid';

import { MenuTitleAtom } from '../../../../components/atoms/MenuTitleAtom/MenuTitleAtom.jsx';
import { MenuTextMolecule } from '../../../../components/molecules/MenuTextMolecule/MenuTextMolecule.jsx';

import css from './WineGlassesListOrganism.module.css';

function WineGlassesListOrganism({
  category,
  data,
  title,
  volumeFirst,
  volumeSecond,
  volumeThird,
  categoryTitle,
  regionName,
  countryName,
  grapeName,
}) {
  const itemsByCategory = data[category];
  const items = itemsByCategory.map(item => {
    const id = nanoid();
    const { name, description, priceGlass, priceBigGlass, priceBottle, year } =
      item;
    return (
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
    );
  });
  return (
    <>
      <MenuTitleAtom
        className={css['wine__category-name']}
        title={categoryTitle}
      />
      <MenuTitleAtom
        className={css['wine__category-country']}
        title={countryName}
      />
      <MenuTitleAtom
        className={css['wine__category-region']}
        title={regionName}
      />
      <MenuTitleAtom
        className={css['wine__category-grape']}
        title={grapeName}
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
