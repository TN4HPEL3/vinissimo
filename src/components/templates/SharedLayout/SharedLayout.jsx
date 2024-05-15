import { Outlet } from 'react-router-dom';

// import { Header } from '../Header/Header.jsx';
// import { Footer } from '../Footer/Footer.jsx';
import { Container } from '../Container/Container.jsx';
import { NavigationTemplate } from '../NavigationTemplate/NavigationTemplate.jsx';

function SharedLayout() {
  return (
    <>
      <Container>
        {/* <Header /> */}
        <NavigationTemplate />
        <Outlet />
        {/* <Footer /> */}
      </Container>
    </>
  );
}

export { SharedLayout };
