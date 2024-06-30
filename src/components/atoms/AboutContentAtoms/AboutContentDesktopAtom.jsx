import { useLanguage } from '../../../helpers/contexts/languageContext';

function AboutContentDesktopAtom({ isTop = true }) {
  const { t } = useLanguage();
  return (
    <>
      {isTop ? (
        <>
          {t.aboutUsPrimaryFirst}
          <br />
          <br />
          {t.aboutUsPrimarySecond}
        </>
      ) : (
        <>
          {t.aboutUsSecondaryFirst}
          <br /> <br />
          {t.aboutUsSecondarySecond}
          <br />
          <br />
          {t.aboutUsInvite}
        </>
      )}
    </>
  );
}

export { AboutContentDesktopAtom };
