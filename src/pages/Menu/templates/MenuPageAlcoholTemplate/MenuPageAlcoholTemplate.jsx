import { useState } from 'react';

import { smoothScrollToTop } from '../../../../helpers/smoothScroll.js';
import { MenuPageButtonsOrganism } from '../../organisms/MenuPageButtonsOrganism/MenuPageButtonsOrganism.jsx';
import { MenuPageNumberTextMolecule } from '../../molecules/MenuPageNumberTextMolecule/MenuPageNumberTextMolecule.jsx';
import { MenuAlcoholsFirstPageOrganism } from '../../organisms/MenuAlcoholsFirstPageOrganism/MenuAlcoholsFirstPageOrganism.jsx';
import { MenuPageArrowLeftButtonMolecule } from '../../molecules/MenuPageArrowButtonMolecule/MenuPageArrowLeftButtonMolecule.jsx';
import { MenuAlcoholsSecondPageOrganism } from '../../organisms/MenuAlcoholsSecondPageOrganism/MenuAlcoholsSecondPageOrganism.jsx';
import { MenuPageArrowRightButtonMolecule } from '../../molecules/MenuPageArrowButtonMolecule/MenuPageArrowRightButtonMolecule.jsx';

import css from './MenuPageAlcoholTemplate.module.css';

function MenuPageAlcoholTemplate() {
  smoothScrollToTop();
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
        <MenuPageArrowLeftButtonMolecule onClick={goToPreviousPage} />
      )}
      {numberOfPages !== pageNumber && (
        <MenuPageArrowRightButtonMolecule onClick={goToNextPage} />
      )}
    </div>
  );
}

export { MenuPageAlcoholTemplate };
