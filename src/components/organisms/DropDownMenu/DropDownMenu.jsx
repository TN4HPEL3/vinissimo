import { nanoid } from 'nanoid';

import css from './DropDownMenu.module.css';

function DropDownMenu({ options, handleClick }) {
  const listItems = options.map(item => {
    const id = nanoid();
    return (
      <li key={id} onClick={handleClick}>
        {item}
      </li>
    );
  });
  return <ul className={css.dropdownMenu}>{listItems}</ul>;
}

export { DropDownMenu };
