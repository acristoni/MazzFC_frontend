import { Animal } from '../interfaces/animal.interface';
import mock from '../mock/mockData'

export default function searchData(searchWord: string, setAnimals: (value: Animal[]) => void) {
    const allAnimals = mock.mockData;

    const animalsTypeFound = allAnimals.filter(animalInfo => animalInfo.type.toLowerCase() === searchWord.toLowerCase())
    const animalTitleFound = allAnimals.filter(animalInfo => {
      const arrayWordsTitle = animalInfo.title.split(' ')
      const arrayWordsTitleLowerCase = arrayWordsTitle.map((word: string) => word.toLowerCase())
      return arrayWordsTitleLowerCase.includes(searchWord.toLowerCase())
    })

    setAnimals(animalTitleFound.length ? animalTitleFound : animalsTypeFound);
}