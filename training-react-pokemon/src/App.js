import React, { useCallback, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './routes/index';
import Header from './components/layouts/header';
import Loading from './components/Loading/loading';

function App() {

  const renderRoutes = useCallback(routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        const { path, exact, component } = route;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            component={component}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div id="pokes" className="pokes">
          <Suspense fallback={<Loading isLoading={true} />}>
            {renderRoutes(routes)}
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
