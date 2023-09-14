import { Animal } from "../interfaces/animal.interface";

export default function Result({ info }: { info: Animal }) {
    return (
        <div className="Result">
            <p>{info.url}</p>
            <p className="Title-result">{info.title}</p>
            <p style={{ textAlign: 'start' }}>{info.description}</p>
        </div>
    )
}