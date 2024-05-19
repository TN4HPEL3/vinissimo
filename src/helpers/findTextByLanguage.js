import footerText from '../data/footerText.json';

function findTextByLanguage(id, language) {
  const itemsByLanguage = footerText[language];
  return itemsByLanguage.find(item => item.id === id);
}

const { text: nameTextPL } = findTextByLanguage('name', 'PL');
const { text: addressTextPL } = findTextByLanguage('address', 'PL');
const { text: openingHoursTextPL } = findTextByLanguage('openingHours', 'PL');
const { text: privacyPolicyTextPL } = findTextByLanguage('privacyPolicy', 'PL');
const { text: openingHoursSundayTextPL } = findTextByLanguage(
  'openingHoursSunday',
  'PL'
);

export {
  findTextByLanguage,
  nameTextPL,
  addressTextPL,
  openingHoursTextPL,
  openingHoursSundayTextPL,
  privacyPolicyTextPL,
};
