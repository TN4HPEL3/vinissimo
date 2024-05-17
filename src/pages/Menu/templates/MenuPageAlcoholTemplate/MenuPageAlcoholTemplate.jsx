import { useState } from 'react';

import { IconAtom } from '../../../../components/atoms/IconAtom/IconAtom';
import { MenuPageButtonsOrganism } from '../../organisms/MenuPageButtonsOrganism/MenuPageButtonsOrganism';
import { MenuPageNumberTextMolecule } from '../../molecules/MenuPageNumberTextMolecule/MenuPageNumberTextMolecule';
import { MenuAlcoholsFirstPageOrganism } from '../../organisms/MenuAlcoholsFirstPageOrganism/MenuAlcoholsFirstPageOrganism';
import { MenuAlcoholsSecondPageOrganism } from '../../organisms/MenuAlcoholsSecondPageOrganism/MenuAlcoholsSecondPageOrganism';

import css from './MenuPageAlcoholTemplate.module.css';

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
      <MenuPageNumberTextMolecule
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
      />

      {pageNumber === 0 && (
        <div className={css['menu__alcohols__content--page']}>
          <MenuAlcoholsFirstPageOrganism />
        </div>
      )}
      {pageNumber === 1 && (
        <div className={css['menu__alcohols__content--page']}>
          <MenuAlcoholsSecondPageOrganism />
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
