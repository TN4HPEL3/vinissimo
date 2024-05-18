import { useState } from 'react';

import { WinePageButtonsOrganism } from '../organisms/WinePageButtonsOrganism';
import { MenuPageNumberTextMolecule } from '../../Menu/molecules/MenuPageNumberTextMolecule/MenuPageNumberTextMolecule';
import { MenuPageArrowLeftButtonMolecule } from '../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowLeftButtonMolecule';
import { MenuPageArrowRightButtonMolecule } from '../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowRightButtonMolecule';

import css from './WinePageGlassesTemplate.module.css';
import cssMenuPage from '../../Menu/templates/MenuPageAlcoholTemplate/MenuPageAlcoholTemplate.module.css';

function WinePageGlassesTemplate() {
  const [pageNumber, setPageNumber] = useState(0);
  const numberOfPages = 3;
  const goToPreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className={cssMenuPage.menu}>
      <WinePageButtonsOrganism />
      <MenuPageNumberTextMolecule
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
      />

      {pageNumber === 0 && (
        <div className={css['menu__wine__content--page']}>first page</div>
      )}
      {pageNumber === 1 && (
        <div className={css['menu__wine__content--page']}>second page</div>
      )}
      <div className={css.wine__arrows}>
        {pageNumber > 0 && (
          <MenuPageArrowLeftButtonMolecule onClick={goToPreviousPage} />
        )}
        {numberOfPages !== pageNumber && (
          <MenuPageArrowRightButtonMolecule onClick={goToNextPage} />
        )}
      </div>
    </div>
  );
}

export { WinePageGlassesTemplate };
