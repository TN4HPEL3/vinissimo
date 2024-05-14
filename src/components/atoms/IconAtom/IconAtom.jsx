import sprite from '../../../data/sprite.svg';

function IconAtom({ id, className }) {
  return (
    <svg className={className}>
      <use href={sprite + '#icon-' + id}></use>
    </svg>
  );
}

export { IconAtom };
