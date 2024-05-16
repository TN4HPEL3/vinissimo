import FlipPage from 'react-flip-page';
import { useRef, useState } from 'react';

import { MenuAlcoholsOrganism } from '../../organisms/MenuAlcoholsOrganism/MenuAlcoholsOrganism';
import { MenuPageButtonsOrganism } from '../../organisms/MenuPageButtonsOrganism/MenuPageButtonsOrganism';

import menu from '../../../../data/alcohols.json';

import css from './MenuPageAlcoholTemplate.module.css';

function MenuPageAlcoholTemplate() {
  const flipPageRef = useRef(null);
  const [pageNumber, setPageNumber] = useState(0);
  const maxNumberOfPages = 1;

  const goToPreviousPage = () => {
    if (flipPageRef.current) {
      flipPageRef.current.gotoPreviousPage();
      setPageNumber(prevPage => prevPage - 1);
    }
  };
  const goToNextPage = () => {
    if (flipPageRef.current) {
      flipPageRef.current.gotoNextPage();
      setPageNumber(prevPage => prevPage + 1);
    }
  };

  return (
    <div className={css.menu__alcohols}>
      <MenuPageButtonsOrganism />
      {pageNumber > 0 && (
        <button onClick={goToPreviousPage} type="button">
          prev
        </button>
      )}
      {maxNumberOfPages !== pageNumber && (
        <button onClick={goToNextPage} type="button">
          next
        </button>
      )}
      <p className={css.menu__alcohols__page}>
        Strona {pageNumber + 1} z {maxNumberOfPages}
      </p>
      <div className={css.menu__alcohols__content}>
        <FlipPage
          ref={flipPageRef}
          orientation="horizontal"
          uncutPages={true}
          responsive={true}
          flipOnTouch={true}
          showSwipeHint={true}
          onPageChange={e => setPageNumber(e)}
        >
          <article>
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
                <MenuAlcoholsOrganism
                  category={'rum'}
                  data={menu}
                  title={'rum'}
                />
              </div>
            </div>
          </article>
          <article>
            <div className={css['menu__alcohols__content--page']}>
              <div>
                <MenuAlcoholsOrganism
                  category={'tequila'}
                  data={menu}
                  title={'tequila'}
                />
                <MenuAlcoholsOrganism
                  category={'gin'}
                  data={menu}
                  title={'gin'}
                />
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
          </article>
        </FlipPage>
      </div>
    </div>
  );
}

export { MenuPageAlcoholTemplate };
