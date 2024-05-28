function ContactLinkAtom({ href, children, className }) {
  return (
    <a
      target="_blank"
      without
      rel="noreferrer"
      className={className}
      href={href}
    >
      {children}
    </a>
  );
}

export { ContactLinkAtom };
