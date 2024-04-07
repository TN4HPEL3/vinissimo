import sprite from '../../../data/sprite.svg';

function Icon({ id, className }) {
  return (
    <svg className={className}>
      <use href={sprite + '#icon-' + id}></use>
    </svg>
  );
}

export { Icon };
