import SearchNoWord from "./SearchNoWord";

export default function SearchNoResult({ searchWord }: { searchWord: string }) {
    return (
        <div className="Flex-column">
            <p>No results found for <strong>'{searchWord}'</strong></p>
            <SearchNoWord />
        </div>
    )
}