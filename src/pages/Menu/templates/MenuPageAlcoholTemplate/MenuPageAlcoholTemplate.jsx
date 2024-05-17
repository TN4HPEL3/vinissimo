import { useState } from 'react';

import { MenuPageButtonsOrganism } from '../../organisms/MenuPageButtonsOrganism/MenuPageButtonsOrganism';
import { MenuPageNumberTextMolecule } from '../../molecules/MenuPageNumberTextMolecule/MenuPageNumberTextMolecule';
import { MenuAlcoholsFirstPageOrganism } from '../../organisms/MenuAlcoholsFirstPageOrganism/MenuAlcoholsFirstPageOrganism';
import { MenuPageArrowLeftButtonMolecule } from '../../molecules/MenuPageArrowButtonMolecule/MenuPageArrowLeftButtonMolecule';
import { MenuAlcoholsSecondPageOrganism } from '../../organisms/MenuAlcoholsSecondPageOrganism/MenuAlcoholsSecondPageOrganism';
import { MenuPageArrowRightButtonMolecule } from '../../molecules/MenuPageArrowButtonMolecule/MenuPageArrowRightButtonMolecule';

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
        <MenuPageArrowLeftButtonMolecule onClick={goToPreviousPage} />
      )}
      {numberOfPages !== pageNumber && (
        <MenuPageArrowRightButtonMolecule onClick={goToNextPage} />
      )}
    </div>
  );
}

export { MenuPageAlcoholTemplate };
