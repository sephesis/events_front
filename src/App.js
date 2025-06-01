import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form.jsx';
import LoginPage from './pages/Login.jsx';
import TopMenu from './components/Menu/TopMenu.jsx';

const componentMap = {
  LoginPage: LoginPage,
  Form: Form,
};

function App() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch('/json/routes.json')
      .then(response => response.json())
      .then(data => {
        const routesArray = Object.values(data);
        setRoutes(routesArray);
      })
      .catch(error => console.error('Error loading routes:', error));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <TopMenu routes={routes} />
        <Routes>
          {routes.map((route) => (
            <Route 
              key={route.route} 
              path={route.route} 
              element={React.createElement(componentMap[route.component])} 
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;