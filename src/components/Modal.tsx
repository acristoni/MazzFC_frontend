import SearchDetails from './SearchDetails';
import { Animal } from '../interfaces/animal.interface';
import { useAppHeight } from '../hooks/useAppHeight';

interface ModalType {
    selectedAnimal: Animal | undefined;
    isOpen: boolean;
    toggle: () => void;
}

export default function Modal(props: ModalType) {
    const appHeight = useAppHeight();

    return (
        <div>
            {
                props.isOpen && (
                <div 
                    className="Modal-overlay" 
                    style={{ height: appHeight === "100vh" ? "100vh" : `${appHeight}px` }} 
                    onClick={props.toggle}
                >
                    <div  className="Modal-box">
                        {
                            props.selectedAnimal &&
                            <SearchDetails selectedAnimal={props.selectedAnimal} />
                        }
                    </div>
                </div>
            )}
        </div>
    );
}
