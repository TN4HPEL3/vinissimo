import css from './ContactLinkAtom.module.css';

function ContactLinkAtom({ href, children }) {
  return (
    <a className={css.ContactLinkAtom} href={href}>
      {children}
    </a>
  );
}

export { ContactLinkAtom };
