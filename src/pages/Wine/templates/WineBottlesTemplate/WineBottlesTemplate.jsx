import { useState } from 'react';

import { WineBottlesFirstPageOrganism } from '../../organisms/WineBottles/WineBottlesFirstPageOrganism';
import { WinePageButtonsOrganism } from '../../organisms/WinePageButtonsOrganism/WinePageButtonsOrganism';
import { MenuWineBottlesTextOrganism } from '../../organisms/MenuWineBottlesTextOrganism/MenuWineBottlesTextOrganism';
import { MenuPageNumberTextMolecule } from '../../../Menu/molecules/MenuPageNumberTextMolecule/MenuPageNumberTextMolecule';
import { MenuPageArrowLeftButtonMolecule } from '../../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowLeftButtonMolecule';
import { MenuPageArrowRightButtonMolecule } from '../../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowRightButtonMolecule';

import css from '../WineGlassesTemplate/WineGlassesTemplate.module.css';

function WineBottlesTemplate() {
  const [pageNumber, setPageNumber] = useState(0);
  const numberOfPages = 22;
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
          <MenuWineBottlesTextOrganism />
        </div>
      )}
      {pageNumber === 1 && (
        <div className={css['menu__wine__content--page']}>
          <WineBottlesFirstPageOrganism />
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

export { WineBottlesTemplate };
