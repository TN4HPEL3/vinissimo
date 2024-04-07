import css from './ContactLinkAtom.module.css';

function ContactLinkAtom({ href, text }) {
  return (
    <a className={css.ContactLinkAtom} href={href}>
      {text}
    </a>
  );
}

export { ContactLinkAtom };
