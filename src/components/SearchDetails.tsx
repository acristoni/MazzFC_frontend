import { Animal } from "../interfaces/animal.interface";

export default function SearchDetails({ selectedAnimal }: { selectedAnimal: Animal }) {
    return (
        <div className="Search-details">
            <img 
                className="Img-search-details" 
                src={selectedAnimal.image}
                alt="detail info"
            />
            <p style={{ color: "gray" }}>{selectedAnimal.url}</p>
            <p className="Title-search-details">{selectedAnimal.title}</p>
            <p style={{ textAlign: 'start' }}>{selectedAnimal.description}</p>
        </div>
    )
}