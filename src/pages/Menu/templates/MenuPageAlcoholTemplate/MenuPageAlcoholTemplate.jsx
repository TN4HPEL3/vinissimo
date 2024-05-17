import { useState } from 'react';

import { MenuAlcoholsOrganism } from '../../organisms/MenuAlcoholsOrganism/MenuAlcoholsOrganism';
import { MenuPageButtonsOrganism } from '../../organisms/MenuPageButtonsOrganism/MenuPageButtonsOrganism';

import menu from '../../../../data/alcohols.json';

import css from './MenuPageAlcoholTemplate.module.css';
import { IconAtom } from '../../../../components/atoms/IconAtom/IconAtom';

function MenuPageAlcoholTemplate() {
  const [pageNumber, setPageNumber] = useState(0);
  const numberOfPages = 1;
  const goToPreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className={css.menu}>
      <MenuPageButtonsOrganism />
      <p>
        Strona {pageNumber + 1} z {numberOfPages + 1}
      </p>
      {pageNumber === 0 && (
        <div className={css['menu__alcohols__content--page']}>
          <div>
            <MenuAlcoholsOrganism
              category={'cocktails'}
              data={menu}
              title={'cocktails'}
            />
            <MenuAlcoholsOrganism
              category={'apéritif'}
              data={menu}
              title={'apéritif'}
            />
            <MenuAlcoholsOrganism
              category={'vodka'}
              data={menu}
              title={'vodka | tincture'}
            />
          </div>
          <div>
            <MenuAlcoholsOrganism
              category={'highlandPark'}
              data={menu}
              title={'highland park single malt whisky'}
            />
            <MenuAlcoholsOrganism
              category={'whisky'}
              data={menu}
              title={'whisky | bourbon | whiskey'}
            />
            <MenuAlcoholsOrganism category={'rum'} data={menu} title={'rum'} />
          </div>
        </div>
      )}
      {pageNumber === 1 && (
        <div className={css['menu__alcohols__content--page']}>
          <div>
            <MenuAlcoholsOrganism
              category={'tequila'}
              data={menu}
              title={'tequila'}
            />
            <MenuAlcoholsOrganism category={'gin'} data={menu} title={'gin'} />
            <MenuAlcoholsOrganism
              category={'cognac'}
              data={menu}
              title={'cognac | brandy | armagnac'}
            />
          </div>
          <div>
            <MenuAlcoholsOrganism
              category={'vermouth'}
              data={menu}
              title={'vermouth'}
            />

            <MenuAlcoholsOrganism
              category={'digestif'}
              data={menu}
              title={'digestif'}
            />

            <MenuAlcoholsOrganism
              category={'liqueurs'}
              data={menu}
              title={'liqueurs'}
            />
          </div>
        </div>
      )}
      {pageNumber > 0 && (
        <button
          className={css['menu__button__arrow--left']}
          onClick={goToPreviousPage}
          type="button"
        >
          <IconAtom id="right-arrow" />
        </button>
      )}
      {numberOfPages !== pageNumber && (
        <button
          className={css['menu__button__arrow--right']}
          onClick={goToNextPage}
          type="button"
        >
          <IconAtom id="right-arrow" />
        </button>
      )}
    </div>
  );
}

export { MenuPageAlcoholTemplate };
