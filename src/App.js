import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './components/Form.jsx';
import LoginPage from './pages/Login.jsx';

const componentMap = {
  LoginPage: LoginPage,
  Form: Form,
  // Добавьте другие компоненты по мере необходимости
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
        {/* Навигационные ссылки */}
        {routes.map((route) => (
          <Link key={route.route} to={route.route}>
            {route.name}
          </Link>
        ))}
        
        <Routes>
          {/* Динамические роуты из JSON */}
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