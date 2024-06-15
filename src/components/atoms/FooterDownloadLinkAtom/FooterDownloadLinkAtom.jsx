import { Link } from 'react-router-dom';

function FooterDownloadLinkAtom({ href, textOnDownload, children }) {
  return (
    <Link to={href} target="_blank" download={textOnDownload}>
      {children}
    </Link>
  );
}

export { FooterDownloadLinkAtom };
