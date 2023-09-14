import { Animal } from "../interfaces/animal.interface";

type Props = {
    selectedAnimal: Animal | undefined;
    isNotMobile?: boolean;
}

export default function SearchDetails({ selectedAnimal, isNotMobile = false }: Props ) {
    return (
        <div className="Search-details" style={{ marginLeft: !isNotMobile ? 0 : '30px' }}>
            {
                selectedAnimal &&
                <>
                    <img 
                        className="Img-search-details" 
                        src={selectedAnimal.image}
                        alt="detail info"
                    />
                    <p style={{ color: "gray" }}>{selectedAnimal.url}</p>
                    <p className="Title-search-details">{selectedAnimal.title}</p>
                    <p style={{ textAlign: 'start' }}>{selectedAnimal.description}</p>
                </>
            }
        </div>
    )
}