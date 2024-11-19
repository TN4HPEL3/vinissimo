import { IconAtom } from '../../../../components/atoms/IconAtom/IconAtom.jsx';

import css from './NewYearCategoryDetailsAtom.module.css';

function NewYearCategoryDetailsAtom({ details, category }) {
  const isStarAppearing =
    category === 'starters' ||
    category === 'mains' ||
    category === 'desserts' ||
    category === 'onStart';
  const areThreeStarsAppearing =
    category === 'starters' || category === 'starter1';
  const listClassName = () =>
    category === 'starters' ||
    category === 'mains' ||
    category === 'desserts' ||
    category === 'onStart' ||
    category === 'starter1'
      ? 'newYear__list__details' + '--' + category
      : 'newYear__list__details';
  const getListClassName = [css[listClassName()]];

  return (
    <div className={css.newYearContainer}>
      {Array.isArray(details) ? (
        <ul>
          {details.map((item, index) => (
            <li key={index} className={getListClassName}>
              {item}
              {isStarAppearing && (
                <IconAtom className={[css['newYear__list__icon']]} id="star" />
              )}
              {areThreeStarsAppearing && (
                <div>
                  <IconAtom
                    className={[css['newYear__list__icon--last']]}
                    id="star"
                  />
                  <IconAtom
                    className={[css['newYear__list__icon--last']]}
                    id="star"
                  />
                  <IconAtom
                    className={[css['newYear__list__icon--last']]}
                    id="star"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.newYear__list__details}>{details}</p>
      )}
    </div>
  );
}

export { NewYearCategoryDetailsAtom };
