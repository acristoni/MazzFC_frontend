import { useEffect, useState } from 'react';
import './App.css';
import { Animal } from './interfaces/animal.interface';
import Header from './components/Header';
import Footer from './components/Footer';
import MainHomePage from './components/MainHomePage';
import searchData from './utils/searchData';
import MainSearchPage from './components/MainSearchPage';

function App() {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [searchWord, setSearchWord] = useState<string>("")
  const [isSearchPage, setIsSearchPage] = useState<boolean>(false)

  useEffect(()=>{
    searchData(searchWord, setAnimals)
  },[searchWord])

  return (
    <div className="App">
      <Header 
        setIsSearchPage={setIsSearchPage}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        isSearchPage={isSearchPage}
      />
      {
        isSearchPage ?
        <MainSearchPage 
          animals={animals}
          searchWord={searchWord}
        /> :
        <MainHomePage 
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          setIsSearchPage={setIsSearchPage}
        />
      }
      <Footer />
    </div>
  );
}

export default App;
