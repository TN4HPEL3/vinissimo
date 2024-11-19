import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/Home/HomePage.jsx';
import { MenuPage } from './pages/Menu/MenuPage.jsx';
import { WinePage } from './pages/Wine/WinePage.jsx';
import { TeamPage } from './pages/Team/TeamPage.jsx';
import { Page404 } from './pages/Page404/Page404.jsx';
import { EventsPage } from './pages/Events/EventsPage.jsx';
import { SharedLayout } from './components/templates/SharedLayout/SharedLayout.jsx';
import { WineGlassesTemplate } from './pages/Wine/templates/WineGlassesTemplate/WineGlassesTemplate.jsx';
import { WineBottlesTemplate } from './pages/Wine/templates/WineBottlesTemplate/WineBottlesTemplate.jsx';
import { MenuPageFoodTemplate } from './pages/Menu/templates/MenuPageFoodTemplate/MenuPageFoodTemplate.jsx';
import { MenuPageAlcoholTemplate } from './pages/Menu/templates/MenuPageAlcoholTemplate/MenuPageAlcoholTemplate.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="wine" element={<WinePage />}>
          <Route path="glasses" element={<WineGlassesTemplate />} />
          <Route path="bottles" element={<WineBottlesTemplate />} />
        </Route>
        <Route path="menu" element={<MenuPage />}>
          <Route path="food" element={<MenuPageFoodTemplate />} />
          <Route path="alcohol" element={<MenuPageAlcoholTemplate />} />
        </Route>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export { App };
