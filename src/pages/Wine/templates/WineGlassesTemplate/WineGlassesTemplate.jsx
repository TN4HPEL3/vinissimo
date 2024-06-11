import { useState } from 'react';

import { DownloadMenuAtom } from '../../atoms/DownloadMenuAtom.jsx';
import { smoothScrollToTop } from '../../../../helpers/smoothScroll.js';
import { WinePageButtonsOrganism } from '../../organisms/WinePageButtonsOrganism/WinePageButtonsOrganism.jsx';
import { WineGlassesFirstPageOrganism } from '../../organisms/WineGlassesFirstPageOrganism/WineGlassesFirstPageOrganism.jsx';
import { WineGlassesThirdPageOrganism } from '../../organisms/WineGlassesThirdPageOrganism/WineGlassesThirdPageOrganism.jsx';
import { MenuPageNumberTextMolecule } from '../../../Menu/molecules/MenuPageNumberTextMolecule/MenuPageNumberTextMolecule.jsx';
import { WineGlassesSecondPageOrganism } from '../../organisms/WineGlassesSecondPageOrganism/WineGlassesSecondPageOrganism.jsx';
import { MenuPageArrowLeftButtonMolecule } from '../../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowLeftButtonMolecule.jsx';
import { MenuPageArrowRightButtonMolecule } from '../../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowRightButtonMolecule.jsx';

import css from './WineGlassesTemplate.module.css';
import { checkArrowDownButton } from '../../../../helpers/checkArrowDownButton.js';

function WineGlassesTemplate() {
  smoothScrollToTop();
  const [pageNumber, setPageNumber] = useState(0);
  const numberOfPages = 2;
  const goToPreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  checkArrowDownButton({
    goToPreviousPage,
    goToNextPage,
    numberOfPages,
    pageNumber,
  });
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
      <DownloadMenuAtom
        href="/WinesGlasses.pdf"
        textButton="Pobierz kartę win na kieliszki"
        textOnDownload={'Wines glasses'}
      />
    </div>
  );
}

export { WineGlassesTemplate };
