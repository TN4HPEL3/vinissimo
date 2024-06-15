import classNames from 'classnames';

import css from './WinePageCategoriesButtonsMolecule.module.css';

function WinePageCategoriesButtonsMolecule({
  handleClick,
  category,
  pageNumber,
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
  return (
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
  );
}

export { WinePageCategoriesButtonsMolecule };
