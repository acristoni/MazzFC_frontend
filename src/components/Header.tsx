import { DotsNine } from "@phosphor-icons/react";
import mock from "../mock/mockData"
import { searchInput as ISearchInput} from "../interfaces/searchInput.interface";
import googlelogo from '../assets/googlelogo.png'
import SearchInput from "./SearchInput";

interface Props extends ISearchInput {
    isSearchPage: boolean;
    setIsSearchPage: (value: boolean) => void;
}

export default function Header({ 
    setIsSearchPage, 
    isSearchPage, 
    searchWord, 
    setSearchWord 
}: Props) {
    return (
        <header className="App-header Template-container">
            {
                isSearchPage ? 
                <div className="Flex">
                    <img 
                        src={googlelogo}
                        alt="Logo Google"
                        style={{ cursor: 'pointer', height: '32px' }}
                        onClick={()=>setIsSearchPage(false)}
                    />
                    <SearchInput 
                        searchWord={searchWord} 
                        setSearchWord={setSearchWord} 
                        isSearchPage={isSearchPage}
                    />
                </div> :
                <div className="Flex">
                    <p>
                        <strong>Agile Content</strong> Frontend test
                    </p>
                </div>
            }
            <div className="Flex">
                <DotsNine size={32} style={{ cursor: 'pointer'}}/>
                <img 
                    src={mock.mockAvatarUrl} 
                    alt='avatar'
                    className="Avatar"
                />
            </div>
        </header>
    )
}