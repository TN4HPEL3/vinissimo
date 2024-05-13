function ContactLinkAtom({ href, children, className }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

export { ContactLinkAtom };
