import { Outlet } from 'react-router-dom';

import { Container } from '../Container/Container.jsx';
import { FooterTemplate } from '../Footer/FooterTemplate.jsx';
import { NavigationTemplate } from '../NavigationTemplate/NavigationTemplate.jsx';

function SharedLayout() {
  return (
    <>
      <Container>
        <NavigationTemplate />
        <Outlet />
        <FooterTemplate />
      </Container>
    </>
  );
}

export { SharedLayout };
