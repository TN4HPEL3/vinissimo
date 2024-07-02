import { useState } from 'react';

import { DownloadMenuAtom } from '../../atoms/DownloadMenuAtom.jsx';
import { smoothScrollToTop } from '../../../../helpers/smoothScroll.js';
import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { checkArrowDownButton } from '../../../../helpers/checkArrowDownButton.js';
import { WinePageButtonsOrganism } from '../../organisms/WinePageButtonsOrganism/WinePageButtonsOrganism.jsx';
import { WineBottlesFirstPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesFirstPageOrganism.jsx';
import { WineBottlesThirdPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesThirdPageOrganism.jsx';
import { WineBottlesFifthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesFifthPageOrganism.jsx';
import { WineBottlesSixthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesSixthPageOrganism.jsx';
import { WineBottlesNinthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesNinthPageOrganism.jsx';
import { WineBottlesTenthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesTenthPageOrganism.jsx';
import { WineBottlesFourthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesFourthPageOrganism.jsx';
import { WineBottlesSecondPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesSecondPageOrganism.jsx';
import { WineBottlesEighthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesEighthPageOrganism.jsx';
import { WineBottlesTwelfthPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesTwelfthPageOrganism.jsx';
import { WineBottlesSeventhPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesSeventhPageOrganism.jsx';
import { WineBottlesEleventhPageOrganism } from '../../organisms/WineBottlesPages/WineBottlesEleventhPageOrganism.jsx';
import { MenuWineBottlesTextOrganism } from '../../organisms/MenuWineBottlesTextOrganism/MenuWineBottlesTextOrganism.jsx';
import { MenuPageNumberTextMolecule } from '../../../Menu/molecules/MenuPageNumberTextMolecule/MenuPageNumberTextMolecule.jsx';
import { MenuPageArrowLeftButtonMolecule } from '../../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowLeftButtonMolecule.jsx';
import { WinePageCategoriesButtonsMolecule } from '../../molecules/WinePageCategoriesButtonsMolecule/WinePageCategoriesButtonsMolecule.jsx';
import { MenuPageArrowRightButtonMolecule } from '../../../Menu/molecules/MenuPageArrowButtonMolecule/MenuPageArrowRightButtonMolecule.jsx';

import css from '../WineGlassesTemplate/WineGlassesTemplate.module.css';

function WineBottlesTemplate() {
  smoothScrollToTop();
  const [pageNumber, setPageNumber] = useState(0);
  const [category, setCategory] = useState(null);

  const numberOfPages = 12;
  const className = css['menu__wine__content--page'];
  const { t } = useLanguage();
  const { wineBottlesDownloadButton } = t;

  const goToPreviousPage = () => {
    setPageNumber(pageNumber - 1);
    setCategory(null);
  };
  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
    setCategory(null);
  };

  checkArrowDownButton({
    goToPreviousPage,
    goToNextPage,
    numberOfPages,
    pageNumber,
  });

  const handleClick = e => {
    const id = e.target.id;
    setCategory(id);
    switch (id) {
      case 'champagne':
        setPageNumber(1);
        break;
      case 'sparkling':
        setPageNumber(2);
        break;
      case 'whiteWines':
        setPageNumber(3);
        break;
      case 'redWines':
        setPageNumber(8);
        break;
      case 'bigBottles':
        setPageNumber(12);
        break;
      default:
        setPageNumber(0);
    }
  };
  return (
    <div className={css.menu__wine}>
      <WinePageButtonsOrganism />
      <WinePageCategoriesButtonsMolecule
        handleClick={handleClick}
        category={category}
        pageNumber={pageNumber}
      />
      <MenuPageNumberTextMolecule
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
      />
      {pageNumber === 0 && (
        <div className={className}>
          <MenuWineBottlesTextOrganism />
        </div>
      )}
      {pageNumber === 1 || category === 'champagne' ? (
        <div className={className}>
          <WineBottlesFirstPageOrganism />
        </div>
      ) : null}
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
      <DownloadMenuAtom
        href="/WinesBottles.pdf"
        textButton={wineBottlesDownloadButton}
        textOnDownload={'Wines bottles'}
      />
    </div>
  );
}

export { WineBottlesTemplate };
