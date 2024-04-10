import { nanoid } from 'nanoid';

function DropDownMenu({ options, handleClick }) {
  const listItems = options.map(item => {
    const id = nanoid();
    return (
      <li key={id} onclick={handleClick}>
        {item}
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export { DropDownMenu };
