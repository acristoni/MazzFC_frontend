import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import mockData from './mock/mockData'
import { Animal } from './interfaces/animal.interface';

function App() {
  const [animals, setAnimals] = useState<Animal[]>([])
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ animals:", animals)

  useEffect(()=>{
    const allAnimals = mockData;
    setAnimals(allAnimals);
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
