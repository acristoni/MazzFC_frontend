import { useState } from "react";
import { Animal } from "../interfaces/animal.interface";

type Props = {
    info: Animal; 
    setSelectedAnimal: (value: Animal) => void;
}

export default function Result({ info, setSelectedAnimal }: Props) {
    const [isHover, setIsHover] = useState<boolean>(false)

    return (
        <div 
            className="Result" 
            onMouseEnter={()=>setIsHover(true)} 
            onMouseLeave={()=>setIsHover(false)}
            onClick={()=>setSelectedAnimal(info)}
        >
            <p>{info.url}</p>
            <p 
                className="Title-result" 
                style={{ textDecoration: isHover ? 'underline' : 'none'}} 
            >{info.title}</p>
            <p style={{ textAlign: 'start' }}>{info.description}</p>
        </div>
    )
}