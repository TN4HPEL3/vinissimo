import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { TeamPageNameAtom } from '../atoms/TeamPageNameAtom/TeamPageNameAtom.jsx';
import { TeamPageTitleAtom } from '../atoms/TeamPageTitleAtom/TeamPageTitleAtom.jsx';
import { ParagraphAtom } from '../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';

import css from './TeamPageMolecule.module.css';

function TeamPageMolecule() {
  const { t } = useLanguage();
  const {
    teamTitle,
    teamDescriptionPrimary,
    teamDescriptionSecondary,
    teamKitchenTitle,
    teamHeadChefTitle,
    teamHeadChefDescription,
    teamJuniorSousChefTitle,
    teamJuniorSousChefDescription,
    teamSeniorGrillChefTitle,
    teamSeniorGrillChefDescription,
    teamChefDePartieFirstTitle,
    teamChefDePartieFirstDescription,
    teamChefDePartieSecondTitle,
    teamFrontTitle,
    teamFrontManagerTitle,
    teamFrontManagerDescription,
    teamPrimarySommelierTitle,
    teamPrimarySommelierDescription,
    teamSecondarySommelierTitle,
    teamSecondarySommelierDescription,
    teamBoss,
    teamBossTitle,
    teamBossDescription,
  } = t;
  return (
    <>
      <TeamPageTitleAtom>{teamTitle}</TeamPageTitleAtom>
      <ParagraphAtom
        className={css.team__content__description}
        text={teamDescriptionPrimary}
      />
      <ParagraphAtom
        className={css.team__content__description}
        text={teamDescriptionSecondary}
      />
      <TeamPageTitleAtom>{teamKitchenTitle}</TeamPageTitleAtom>
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>{teamHeadChefTitle}</TeamPageNameAtom>
            {teamHeadChefDescription}
          </>
        }
      />
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>{teamJuniorSousChefTitle}</TeamPageNameAtom>
            {teamJuniorSousChefDescription}
          </>
        }
      />
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>{teamSeniorGrillChefTitle}</TeamPageNameAtom>
            {teamSeniorGrillChefDescription}
          </>
        }
      />
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>{teamChefDePartieFirstTitle}</TeamPageNameAtom>
            {teamChefDePartieFirstDescription}
          </>
        }
      />

      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>{teamChefDePartieSecondTitle}</TeamPageNameAtom>
            <br />
          </>
        }
      />
      <TeamPageTitleAtom>{teamFrontTitle}</TeamPageTitleAtom>
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>{teamFrontManagerTitle}</TeamPageNameAtom>
            {teamFrontManagerDescription}
          </>
        }
      />
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>{teamPrimarySommelierTitle}</TeamPageNameAtom>
            {teamPrimarySommelierDescription}
          </>
        }
      />
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>{teamSecondarySommelierTitle}</TeamPageNameAtom>
            {teamSecondarySommelierDescription}
          </>
        }
      />
      <TeamPageTitleAtom>{teamBoss}</TeamPageTitleAtom>
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>{teamBossTitle}</TeamPageNameAtom>
            {teamBossDescription}
          </>
        }
      />
    </>
  );
}

export { TeamPageMolecule };
