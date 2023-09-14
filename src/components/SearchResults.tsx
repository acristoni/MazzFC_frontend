import { Animal } from "../interfaces/animal.interface"

type Props = {
    animals: Animal[];
}

export default function SearchResults({ animals }: Props) {
    console.log("🚀 ~ file: SearchResults.tsx:8 ~ SearchResults ~ animals:", animals)
    return(
        <></>
    )
}