import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    arrayTasks.map((task) => {
      return <li> {task} </li>
    })
  );
};

const arrayTasks = ['Projeto Jest', 'Mandar bem no React', 'Terminar 24 hs']

function App() {
  return task()
}

export default App;
