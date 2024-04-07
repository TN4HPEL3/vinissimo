import links from '../data/contactLinks.json';

function findLink(id) {
  return links.links.find(link => link.id === id);
}

const { href: hrefEmail } = findLink('mail');
const { href: hrefGoogle } = findLink('google');
const { href: hrefPhoneNumber } = findLink('phone');
const { href: hrefFacebook } = findLink('facebook');
const { href: hrefInstagram } = findLink('instagram');
const { href: hrefTrojmiasto } = findLink('trojmiasto');
const { href: hrefTripAdvisor } = findLink('tripadvisor');

export {
  findLink,
  hrefTripAdvisor,
  hrefInstagram,
  hrefFacebook,
  hrefPhoneNumber,
  hrefEmail,
  hrefGoogle,
  hrefTrojmiasto,
};
