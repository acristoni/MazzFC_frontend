import { useEffect, useState } from "react";
import { Animal } from "../interfaces/animal.interface"
import Result from "./Result";
import SearchDetails from "./SearchDetails";

type Props = {
    animals: Animal[];
}

export default function SearchResults({ animals }: Props) {
    const [selectedAnimal, setSelectedAnimal] = useState<Animal>()

    useEffect(()=>{
        setSelectedAnimal(undefined)
    },[animals])

    return(
        <div className="Flex" style={{ alignItems: 'start' }}>
            <div className="Flex-column">
            {
                animals.map(animal => <Result 
                    key={animal.id} 
                    info={animal} 
                    setSelectedAnimal={setSelectedAnimal}
                />)
            }
            </div>
            {
                selectedAnimal &&
                <SearchDetails selectedAnimal={selectedAnimal}/>
            }
        </div>
    )
}