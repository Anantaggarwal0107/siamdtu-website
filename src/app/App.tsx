import { Footer, Header } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { CONSTANT as _const } from './util';
import { AppRoutes, MaintenanceRoutes } from './Routes';
import ScrollToTop from "./components/seriesPost/scrollToTop";
import {Helmet} from "react-helmet";

const App:React.FC = () => {
  const routes = _const.maintenanceMode ? MaintenanceRoutes : AppRoutes;
  const routeComponents = routes.map(({ path, component }, key) => <Route path={path} element={component} key={key} />);
  return (
    <div>
      <Helmet>
        <title>Society For Industrial And Applied Mathematics-DTU | Home</title>
      </Helmet>
      <Router>
        {!_const.maintenanceMode ? <Header /> : ''}
        <ScrollToTop/>
        <Routes>
          {routeComponents}
        </Routes>
        {!_const.maintenanceMode ? <Footer /> : ''}
      </Router>
    </div>
  );
}

export default App;
