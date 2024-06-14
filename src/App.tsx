import React from 'react';
import './App.css';

function App() {
  return (
    <main className="content">
      <section>
        <h1>THIS WEEK</h1>
        <span>신나는 일주일을 계획합시다!</span>
      </section>
      <section>
        <h2>이번주 날씨</h2>
        <div>
          <ul className="weather-wrap">
            <li className="weather-content"></li>
          </ul>
        </div>
      </section>
      <section>
        <h2>이번주 To-Do</h2>
        <button >추가 버튼</button>
        <ul>
          <li>리스트1</li>
        </ul>
      </section>
    </main>
  );
}

export default App;
