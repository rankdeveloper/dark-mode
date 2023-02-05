import React from 'react';
import './style.css';

export default function App(props) {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className="container">
      <nav className={darkMode ? 'dark' : ''}>
        <h2>DarkMode tutorial</h2>
        <div className="toggle">
          <div className="toggle-circle" onClick={toggleMode}></div>
        </div>
      </nav>

      <main className={darkMode ? 'dark' : ''}>
        <h2>Your favourite language</h2>
        <br />
        <hr />
        <br />
        <br />

        <ul>
          <li>JavaScript</li>
          <li>Reactjs</li>
          <li>Nodejs</li>
          <li>Mongodb</li>
          <li>Expressjs</li>
        </ul>
      </main>
    </div>
  );
}
