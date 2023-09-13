import { useEffect, useState } from 'react';
import './App.css';
import mock from './mock/mockData'
import { Animal } from './interfaces/animal.interface';
import Header from './components/Header';
import Footer from './components/Footer';
import MainHomePage from './components/MainHomePage';

function App() {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [searchWord, setSearchWord] = useState<string>("")

  useEffect(()=>{
    const allAnimals = mock.mockData;
    setAnimals(allAnimals);
  },[])

  return (
    <div className="App">
      <Header />
      <MainHomePage 
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
      <Footer />
    </div>
  );
}

export default App;
