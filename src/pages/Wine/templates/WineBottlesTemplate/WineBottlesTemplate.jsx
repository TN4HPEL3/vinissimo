import { useState } from 'react';

import { WinePageButtonsOrganism } from '../../organisms/WinePageButtonsOrganism/WinePageButtonsOrganism';
import { WineBottlesFirstPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesFirstPageOrganism';
import { WineBottlesThirdPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesThirdPageOrganism';
import { WineBottlesFifthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesFifthPageOrganism';
import { WineBottlesSixthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesSixthPageOrganism';
import { WineBottlesEighthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesEighthPageOrganism';
import { WineBottlesNinthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesNinthPageOrganism';
import { WineBottlesTenthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesTenthPageOrganism';
import { WineBottlesFourthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesFourthPageOrganism';
import { WineBottlesSecondPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesSecondPageOrganism';
import { WineBottlesTwelfthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesTwelfthPageOrganism';
import { WineBottlesSeventhPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesSeventhPageOrganism';
import { WineBottlesEleventhPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesEleventhPageOrganism';
import { MenuWineBottlesTextOrganism } from '../../organisms/MenuWineBottlesTextOrganism/MenuWineBottlesTextOrganism';
import { MenuPageNumberTextMolecule } from '../../../Menu/molecules/MenuPageNumberTextMolecule/MenuPageNumberTextMolecule';
import { MenuPageArrowLeftButtonMolecule } from '../../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowLeftButtonMolecule';
import { MenuPageArrowRightButtonMolecule } from '../../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowRightButtonMolecule';

import css from '../WineGlassesTemplate/WineGlassesTemplate.module.css';

function WineBottlesTemplate() {
  const [pageNumber, setPageNumber] = useState(0);

  const numberOfPages = 12;
  const className = css['menu__wine__content--page'];

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
        <div className={className}>
          <MenuWineBottlesTextOrganism />
        </div>
      )}
      {pageNumber === 1 && (
        <div className={className}>
          <WineBottlesFirstPageOrganism />
        </div>
      )}
      {pageNumber === 2 && (
        <div className={className}>
          <WineBottlesSecondPageOrganism />
        </div>
      )}
      {pageNumber === 3 && (
        <div className={className}>
          <WineBottlesThirdPageOrganism />
        </div>
      )}
      {pageNumber === 4 && (
        <div className={className}>
          <WineBottlesFourthPageOrganism />
        </div>
      )}
      {pageNumber === 5 && (
        <div className={className}>
          <WineBottlesFifthPageOrganism />
        </div>
      )}
      {pageNumber === 6 && (
        <div className={className}>
          <WineBottlesSixthPageOrganism />
        </div>
      )}
      {pageNumber === 7 && (
        <div className={className}>
          <WineBottlesSeventhPageOrganism />
        </div>
      )}
      {pageNumber === 8 && (
        <div className={className}>
          <WineBottlesEighthPageOrganism />
        </div>
      )}
      {pageNumber === 9 && (
        <div className={className}>
          <WineBottlesNinthPageOrganism />
        </div>
      )}
      {pageNumber === 10 && (
        <div className={className}>
          <WineBottlesTenthPageOrganism />
        </div>
      )}
      {pageNumber === 11 && (
        <div className={className}>
          <WineBottlesEleventhPageOrganism />
        </div>
      )}
      {pageNumber === 12 && (
        <div className={className}>
          <WineBottlesTwelfthPageOrganism />
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
