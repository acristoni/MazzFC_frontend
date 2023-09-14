import { useEffect, useState } from "react";
import { Animal } from "../interfaces/animal.interface"
import Result from "./Result";
import SearchDetails from "./SearchDetails";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import useIsMobile from "../hooks/useIsMobile";
import Skeleton from "./Skeleton";

type Props = {
    animals: Animal[];
    isLoading: boolean;
}

export default function SearchResults({ animals, isLoading }: Props) {
    const [isChangingScreen, setIsChangingScreen] = useState<boolean>(false)
    const [showDetailsLargeScreen, setShowDetailsLargeScreen] = useState<boolean>(false)
    const [selectedAnimal, setSelectedAnimal] = useState<Animal>()
    const isMobile = useIsMobile();
    const { isOpen, toggle } = useModal();

    useEffect(()=>{
        setSelectedAnimal(undefined)
    },[animals])

    useEffect(()=>{
        if (selectedAnimal && isMobile) {
            toggle()
        } else if (selectedAnimal && !isMobile) {
            setShowDetailsLargeScreen(true)
        } else {
            if (isOpen) {
                toggle()
            }
            if (showDetailsLargeScreen) {
                setShowDetailsLargeScreen(false)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedAnimal])

    useEffect(()=>{
        if (isOpen && !isMobile) {
            setIsChangingScreen(true)
            toggle()
            setShowDetailsLargeScreen(true)
        }
        if (showDetailsLargeScreen && isMobile) {
            setShowDetailsLargeScreen(false)
            if (!isOpen) {
                toggle()
            }
        }
    },[isMobile])

    useEffect(()=>{
        if (!isOpen && isChangingScreen) {
            setIsChangingScreen(false)
        } else
        if (!isOpen) {
            setSelectedAnimal(undefined)
        }
    },[isOpen])

    return(
        <>
            <Modal 
                isOpen={isOpen} 
                selectedAnimal={selectedAnimal} 
                toggle={toggle}
            />
            {
                isLoading ?
                <div className="Flex-column Padding-left">
                    {
                        animals.map(() => <Skeleton />)
                    }
                </div> :
                <div className="Flex" style={{ alignItems: 'start' }}>
                    <div className="Flex-column Padding-left">
                    {
                        animals.map(animal => <Result 
                            key={animal.id} 
                            info={animal} 
                            setSelectedAnimal={setSelectedAnimal}
                        />)
                    }
                    </div>
                    {
                        showDetailsLargeScreen &&
                        <SearchDetails 
                            selectedAnimal={selectedAnimal}
                            isNotMobile
                        />
                    }
                </div>
            }
        </>
    )
}