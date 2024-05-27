import css from './WinePageCategoriesButtonsMolecule.module.css';

function WinePageCategoriesButtonsMolecule({ handleClick }) {
  return (
    <div className={css['wine__page__categories-buttons']}>
      <button type="button" onClick={handleClick} id="champagne">
        champagne
      </button>
      <button type="button" onClick={handleClick} id="sparkling">
        sparkling wines
      </button>
      <button type="button" onClick={handleClick} id="whiteWines">
        white wines
      </button>
      <button type="button" onClick={handleClick} id="redWines">
        red wines
      </button>
      <button type="button" onClick={handleClick} id="bigBottles">
        big bottles
      </button>
    </div>
  );
}

export { WinePageCategoriesButtonsMolecule };
