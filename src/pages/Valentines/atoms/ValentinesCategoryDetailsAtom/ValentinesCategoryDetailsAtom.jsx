import css from './ValentinesCategoryDetailsAtom.module.css';

function ValentinesCategoryDetailsAtom({ details }) {
  return (
    <div className={css.valentines__category__details}>
      {Array.isArray(details) ? (
        <ul>
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{details}</p>
      )}
    </div>
  );
}

export { ValentinesCategoryDetailsAtom };
