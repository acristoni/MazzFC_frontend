import handleSearchButton from "../utils/handleSearchButton"

type Props = {
    setIsSearchPage: (value: boolean) => void
}

export default function SearchButton({ setIsSearchPage }: Props) {
    return (
        <button 
            className="Search-button" 
            onClick={()=>handleSearchButton(setIsSearchPage)}
        >
            BUSCAR
        </button>
    )
}