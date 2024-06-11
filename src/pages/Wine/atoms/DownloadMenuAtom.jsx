import { Link } from 'react-router-dom';

import css from './DownloadMenuAtom.module.css';

function DownloadMenuAtom({ href, textButton, textOnDownload }) {
  return (
    <Link
      className={[css['menu-wine__download-button']]}
      to={href}
      target="_blank"
      download={textOnDownload}
    >
      {textButton}
    </Link>
  );
}

export { DownloadMenuAtom };
