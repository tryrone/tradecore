import React,{useState} from 'react';
import { GenreObj, SubGenre } from '../Types/genreTypes';
import { Step } from '../Types/stepType';

export const BookContext = React.createContext<any>({});

export const BookProvider = ({children}) => {
    const [steps, setSteps] = useState<Step[]>([
      {
        name: "Genre",
        number: 1,
        active: true,
        indicatorTo: true,
      },
      {
        name: "Subgenre",
        number: 2,
        active: false,
        indicatorTo: true,
      },
      {
        name: null,
        number: null,
        active: false,
        indicatorTo: false,
      },
    ]);
    const [activeGenre, setActiveGenre] = useState<GenreObj[]>([]);
    const [activeSubGenre, setActiveSubGenre] = useState<SubGenre>();

    const handleStepChange = (step: [Step]) => {
      setSteps(step);
    };

  return (
    <BookContext.Provider
      value={{
        steps,
        handleStepChange,
        activeGenre,
        setActiveGenre,
        activeSubGenre,
        setActiveSubGenre,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}


