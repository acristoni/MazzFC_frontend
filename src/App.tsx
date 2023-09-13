import { useEffect, useState } from 'react';
import './App.css';
import mock from './mock/mockData'
import { Animal } from './interfaces/animal.interface';
import Header from './components/Header';

function App() {
  const [animals, setAnimals] = useState<Animal[]>([])
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ animals:", animals)

  useEffect(()=>{
    const allAnimals = mock.mockData;
    setAnimals(allAnimals);
  },[])

  return (
    <div className="App">
      <Header />
      <main className="Main-homepage">

      </main>
      <footer className='App-footer'>

      </footer>
    </div>
  );
}

export default App;
