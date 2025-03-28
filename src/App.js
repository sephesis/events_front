import React, {useEffect, useState} from'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from './components/Form.jsx';

function App() {
  return (
    <div className="App">
     <div className='container'>
      <Form />
      </div>
    </div>
  );
}

export default App;