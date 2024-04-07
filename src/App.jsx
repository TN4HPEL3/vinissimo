import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home.jsx';
import { Page404 } from './pages/Page404/Page404.jsx';
import { SharedLayout } from './components/templates/SharedLayout/SharedLayout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export { App };