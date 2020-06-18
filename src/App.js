import React from 'react';
import './App.css';
import { TextareaAutosize } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

function App() {
  return (
    <div className="App">
      <form>
        <Rating/>
        <TextareaAutosize></TextareaAutosize>
      </form>
    </div>
  );
}

export default App;
