import { useState } from "react";
import { Animal } from "../interfaces/animal.interface";

export default function Result({ info }: { info: Animal }) {
    const [isHover, setIsHover] = useState<boolean>(false)

    return (
        <div 
            className="Result" 
            onMouseEnter={()=>setIsHover(true)} 
            onMouseLeave={()=>setIsHover(false)}
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