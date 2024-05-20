import { useState } from 'react';

import { WinePageButtonsOrganism } from '../organisms/WinePageButtonsOrganism/WinePageButtonsOrganism';
import { WineGlassesFirstPageOrganism } from '../organisms/WineGlassesFirstPageOrganism/WineGlassesFirstPageOrganism';
import { WineGlassesThirdPageOrganism } from '../organisms/WineGlassesThirdPageOrganism/WineGlassesThirdPageOrganism';
import { MenuPageNumberTextMolecule } from '../../Menu/molecules/MenuPageNumberTextMolecule/MenuPageNumberTextMolecule';
import { WineGlassesSecondPageOrganism } from '../organisms/WineGlassesSecondPageOrganism/WineGlassesSecondPageOrganism';
import { MenuPageArrowLeftButtonMolecule } from '../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowLeftButtonMolecule';
import { MenuPageArrowRightButtonMolecule } from '../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowRightButtonMolecule';

import css from './WineGlassesTemplate.module.css';

function WineGlassesTemplate() {
  const [pageNumber, setPageNumber] = useState(0);
  const numberOfPages = 2;
  const goToPreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className={css.menu__wine}>
      <WinePageButtonsOrganism />
      <MenuPageNumberTextMolecule
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
      />

      {pageNumber === 0 && (
        <div className={css['menu__wine__content--page']}>
          <WineGlassesFirstPageOrganism />
        </div>
      )}
      {pageNumber === 1 && (
        <div className={css['menu__wine__content--page']}>
          <WineGlassesSecondPageOrganism />
        </div>
      )}
      {pageNumber === 2 && (
        <div className={css['menu__wine__content--page']}>
          <WineGlassesThirdPageOrganism />
        </div>
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

export { WineGlassesTemplate };
