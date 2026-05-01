import classNames from 'classnames';

import css from './WinePageCategoriesButtonsMolecule.module.css';

function WinePageCategoriesButtonsMolecule({
  handleClick,
  category,
  pageNumber,
  handleCountryClick,
}) {
  const classNameButton = (
    buttonId,
    buttonPageStartNumber,
    buttonPageEndNumber
  ) =>
    classNames(css['wine__page__categories-buttons--button'], {
      [css['wine__page__categories-buttons--button--active']]:
        category === buttonId ||
        (buttonPageStartNumber <= pageNumber &&
          pageNumber <= buttonPageEndNumber),
    });

  const classNameCountryButtonWhite = (buttonId, buttonPageNumber) =>
    classNames(css['wine__page__countries-buttons--invisible'], {
      [css['wine__page__countries-buttons--visible']]:
        category === 'whiteWines',
    });

  const classNameCountryButtonRed = (buttonId, buttonPageNumber) =>
    classNames(css['wine__page__countries-buttons--invisible'], {
      [css['wine__page__countries-buttons--visible']]: category === 'redWines',
    });

  return (
    <>
      <div className={css['wine__page__categories-buttons']}>
        <button
          className={classNameButton('champagne', 1, 1)}
          type="button"
          onClick={handleClick}
          id="champagne"
        >
          champagne
        </button>
        <button
          type="button"
          className={classNameButton('sparkling', 2, 2)}
          onClick={handleClick}
          id="sparkling"
        >
          sparkling wines
        </button>
        <button
          type="button"
          className={classNameButton('whiteWines', 3, 7)}
          onClick={handleClick}
          id="whiteWines"
        >
          white wines
        </button>
        <button
          type="button"
          className={classNameButton('redWines', 8, 11)}
          onClick={handleClick}
          id="redWines"
        >
          red wines
        </button>
        <button
          type="button"
          className={classNameButton('bigBottles', 12, 12)}
          onClick={handleClick}
          id="bigBottles"
        >
          big bottles
        </button>
      </div>
      {category === 'whiteWines' && (
        <div className={css['wine__page__countries-buttons']}>
          <button
            className={classNameCountryButtonWhite('FranceWhite', 5)}
            type="button"
            onClick={handleCountryClick}
            id="FranceWhite"
          >
            France
          </button>
          <button
            className={classNameCountryButtonWhite('ItalyWhite', 6)}
            type="button"
            onClick={handleCountryClick}
            id="ItalyWhite"
          >
            Italy
          </button>
          <button
            className={classNameCountryButtonWhite(
              'Germany, Austria, Serbia, Georgia',
              7
            )}
            type="button"
            onClick={handleCountryClick}
            id="Germany, Austria, Serbia, Georgia"
          >
            Germany, Austria, Serbia, Georgia
          </button>
          <button
            className={classNameCountryButtonWhite(
              'Spain, Portugal, Hungary, Slovenia, Poland, Greece',
              8
            )}
            type="button"
            onClick={handleCountryClick}
            id="Spain, Portugal, Hungary, Slovenia, Poland, Greece"
          >
            Spain, Portugal, Hungary, Slovenia, Poland, Greece
          </button>
          <button
            className={classNameCountryButtonWhite('New World', 9)}
            type="button"
            onClick={handleCountryClick}
            id="New World"
          >
            New World
          </button>
        </div>
      )}
      {category === 'redWines' && (
        <div className={css['wine__page__countries-buttons']}>
          <button
            className={classNameCountryButtonRed('FranceRed', 10)}
            type="button"
            onClick={handleCountryClick}
            id="FranceRed"
          >
            France
          </button>
          <button
            className={classNameCountryButtonRed('ItalyRed', 11)}
            type="button"
            onClick={handleCountryClick}
            id="ItalyRed"
          >
            Italy
          </button>
          <button
            className={classNameCountryButtonRed('SpainRed', 12)}
            type="button"
            onClick={handleCountryClick}
            id="SpainRed"
          >
            Spain
          </button>
          <button
            className={classNameCountryButtonRed(
              'Portugal, Austria, Slovenia, Poland, Germany, Hungary, Moldova, New World',
              13
            )}
            type="button"
            onClick={handleCountryClick}
            id="Portugal, Austria, Slovenia, Poland, Germany, Hungary, Moldova, New World"
          >
            Portugal, Austria, Slovenia, Poland, Germany, Hungary, Moldova, New
            World
          </button>
        </div>
      )}
    </>
  );
}

export { WinePageCategoriesButtonsMolecule };
