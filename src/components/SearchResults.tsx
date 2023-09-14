import { Animal } from "../interfaces/animal.interface"
import Result from "./Result";

type Props = {
    animals: Animal[];
}

export default function SearchResults({ animals }: Props) {
    return(
        <>
            {
                animals.map(animal => <Result key={animal.id} info={animal}/>)
            }
        </>
    )
}