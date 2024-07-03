import { useLanguage } from '../../../helpers/contexts/languageContext.js';

function AboutContentDesktopAtom({ isTop = true }) {
  const { t } = useLanguage();
  const {
    aboutUsPrimaryFirst,
    aboutUsPrimarySecond,
    aboutUsSecondaryFirst,
    aboutUsSecondarySecond,
    aboutUsInvite,
  } = t;
  return (
    <>
      {isTop ? (
        <>
          {aboutUsPrimaryFirst}
          <br />
          <br />
          {aboutUsPrimarySecond}
        </>
      ) : (
        <>
          {aboutUsSecondaryFirst}
          <br /> <br />
          {aboutUsSecondarySecond}
          <br />
          <br />
          {aboutUsInvite}
        </>
      )}
    </>
  );
}

export { AboutContentDesktopAtom };
