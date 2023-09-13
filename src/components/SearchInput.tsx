import { useEffect, useState } from "react";
import { searchInput as IsearchInput } from "../interfaces/searchInput.interface";
import { MagnifyingGlass, X } from "@phosphor-icons/react";

export default function SearchInput({ searchWord, setSearchWord }: IsearchInput) {
    const [showX, setShowX] = useState<boolean>(false);

    useEffect(()=>{
        if (searchWord.length > 0 && !showX) {
            setShowX(true)
        }
    },[searchWord])

    return (

          <div className="Input-wrapper">
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