import React from 'react';
import 'antd/dist/antd.less';
import 'styles/theme-override.scss';
import 'styles/font.scss';
import './App.css';
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
