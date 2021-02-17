import React from 'react';
import './App.css';
import 'antd/dist/antd.less';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
