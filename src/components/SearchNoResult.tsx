export default function SearchNoResult({ searchWord }: { searchWord: string }) {
    return (
        <div className="Flex-column Padding-left">
            <p>No results found for <strong>'{searchWord}'</strong></p>
            <p>Try looking for: <strong>insect, fish, horse, crocodilis, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird.</strong></p>
        </div>
    )
}