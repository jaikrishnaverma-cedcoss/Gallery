import Display from './component/Display';
import './App.css';

function App() {
  let prd=[{ "id": 101, "name": "Basket Ball", "image": "basketball.png", "price": 150 }, { "id": 102, "name": "Football", "image": "football.png", "price": 120 }, { "id": 103, "name": "Soccer", "image": "soccer.png", "price": 110 }, { "id": 104, "name": "Table Tennis", "image": "table-tennis.png", "price": 130 }, { "id": 105, "name": "Tennis", "image": "tennis.png", "price": 100 }];
  return (
    <div className="App" id="main">
      <header className="App-header " id="products">
        <Display data={prd[0]}/>
        <Display data={prd[1]}/>
        <Display data={prd[2]}/>
        <Display data={prd[3]}/>
        <Display data={prd[4]}/>
      </header>
    </div>
  );
}

export default App;
