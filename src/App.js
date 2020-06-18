import React from 'react';
import './style.css'
import './App.css';

function App() {

  return (
    <main>
      <div className="App">
        <form>
          <div id="rating">
            <label for="rating">What would you rate our service:</label>
            <input name="ratingInput" class="fa fa-star" id="1" type="radio" value="1" />
            <label class="fa fa-star" for="1"></label>
            <input name="ratingInput" id="2" type="radio" value="2" />
            <label class="fa fa-star" for="2"></label>
            <input name="ratingInput" id="3" type="radio" value="3" />
            <label class="fa fa-star" for="3"></label>
            <input name="ratingInput" id="4" type="radio" value="4" />
            <label class="fa fa-star" for="4"></label>
            <input name="ratingInput" id="5" type="radio" value="5" />
            <label class="fa fa-star" for="5"></label>
          </div>
          <div>
            <label for="feedback">Type your thoughts here:</label>
            <textarea id="feedback" rows="4" cols="50"></textarea>
            <input type="submit" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
