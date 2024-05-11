//We need to import svg sprite here

function IconAtom({ id, className }) {
  return (
    <svg className={className}>
      <use href={sprite + '#icon-' + id}></use>
    </svg>
  );
}

export { IconAtom };
