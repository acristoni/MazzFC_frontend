import googlelogo from '../assets/googlelogo.png'
import { searchInput as IsearchInput } from '../interfaces/searchInput.interface'
import SearchButton from './SearchButton'
import SearchInput from './SearchInput'

export default function MainHomePage({ searchWord, setSearchWord }: IsearchInput) {
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
            <SearchButton />
        </main>
    )
}