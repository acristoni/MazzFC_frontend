import googlelogo from '../assets/googlelogo.png'
import { searchInput as IsearchInput } from '../interfaces/searchInput.interface'
import SearchButton from './SearchButton'
import SearchInput from './SearchInput'

interface Props extends IsearchInput {
    setIsSearchPage: (value: boolean) => void;
}

export default function MainHomePage({ searchWord, setSearchWord, setIsSearchPage }: Props) {
    return (
        <main className="Main-homepage">
            <img 
                src={googlelogo}
                alt="Logo Google"
            />
            <SearchInput 
                searchWord={searchWord}
                setSearchWord={setSearchWord}
            />
            <SearchButton setIsSearchPage={setIsSearchPage}/>
        </main>
    )
}