import { useLanguage } from '../../../../helpers/contexts/languageContext.js';

function EventsDescriptionAtom() {
  const { t } = useLanguage();
  return t.eventsPageSecondaryText;
}

export { EventsDescriptionAtom };
