import { useEffect, useState } from "react";
import { searchInput as IsearchInput } from "../interfaces/searchInput.interface";
import { MagnifyingGlass, X } from "@phosphor-icons/react";

interface Props extends IsearchInput {
    isSearchPage?: boolean;
}

export default function SearchInput({ searchWord, setSearchWord, isSearchPage }: Props) {
    const [showX, setShowX] = useState<boolean>(false);

    useEffect(()=>{
        if (searchWord.length > 0 && !showX) {
            setShowX(true)
        }
    },[searchWord])

    return (

          <div 
            className="Input-wrapper"
            style={{
                marginTop: isSearchPage ? 0 : '20px',
                marginLeft: isSearchPage ? '20px' : 0,
                width: isSearchPage ? '300px' : '70vw',
                height: isSearchPage ? '26px' : '32px'
            }}
        >
            <MagnifyingGlass color="dark-grey" />
            <input
              type="text"
              className="Search-input"
              onChange={e=>setSearchWord(e.target.value)}
              value={searchWord}
            />
            {
                showX &&
                <X 
                    color="dark-grey" 
                    size={20} 
                    style={{ 
                        cursor: 'pointer',
                    }}
                    onClick={()=>{
                        setSearchWord("")
                        setShowX(false)
                    }}
                />
            }
          </div>
      );
}