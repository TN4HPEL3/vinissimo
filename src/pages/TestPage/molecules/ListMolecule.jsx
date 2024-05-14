import { nanoid } from 'nanoid';

import { ContactLinkAtom } from '../../../components/atoms/ContactLinkAtom/ContactLinkAtom';

import css from './ListMolecule.module.css';

function ListMolecule({ items }) {
  const listItems = items.map(item => {
    const { href, text } = item;
    const id = nanoid();
    return (
      <li key={id}>
        <ContactLinkAtom
          href={href}
          children={text}
          className={css.contact__link}
        />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export { ListMolecule };
