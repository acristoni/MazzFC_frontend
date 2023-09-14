import { useEffect, useState } from 'react';
import { Animal } from '../interfaces/animal.interface'
import SearchNoResult from './SearchNoResult';
import SearchNoWord from './SearchNoWord';
import SearchResults from './SearchResults';

interface Props {
    animals: Animal[];
    searchWord: string;
}

export default function MainSearchPage({ animals, searchWord }: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2500);

    },[searchWord])
    
    return (
        <main className="Main-searchpage">
            {
                searchWord.length === 0 ?
                <SearchNoWord /> :
                animals.length === 0 ?
                <SearchNoResult searchWord={searchWord} /> :
                <SearchResults animals={animals} isLoading={isLoading}/>
            }
        </main>
    )
}