import { nanoid } from 'nanoid';

function DropDownMenu({ options, handleClick, className }) {
  const listItems = options.map(item => {
    const id = nanoid();
    return (
      <li key={id} onClick={handleClick}>
        {item}
      </li>
    );
  });
  return <ul className={className}>{listItems}</ul>;
}

export { DropDownMenu };
