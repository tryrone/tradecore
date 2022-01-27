import React,{useState} from 'react';
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
    const [activeGenre, setActiveGenre] = useState({});
    const [addNewBook, setAddNewBook] = useState(false);
    const [successScreen, setSuccessScreen] = useState(false);
    const [successVisible, setSuccessVisible] = useState(false);
    const [descriptionIsRequired, setDescriptionIsRequired] = useState(false);
    const [activeSubGenre, setActiveSubGenre] = useState({});
    const [titleError, setTitleError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [subFormData, setSubFormData] = useState({
      bookTitle: "",
      author: "",
      isbn: "",
      publisher: "",
      date: "",
      noOfPages: "",
      format: "",
      edition: "",
      editionLanguage: "",
      description: "",
    });

    const handleStepChange = (step: [Step]) => {
      setSteps(step);
    };

    const handleTextChange = (e, name) => {
      setSubFormData({ ...subFormData, [name]: e.target.value });
    };
    const handleDropdownChange = (val, name) => {
      setSubFormData((prevState) => ({ ...prevState, [name]: val }));
    };

  return (
    <BookContext.Provider
      value={{
        steps,
        setSteps,
        handleStepChange,
        activeGenre,
        setActiveGenre,
        activeSubGenre,
        setActiveSubGenre,
        addNewBook,
        setAddNewBook,
        descriptionIsRequired,
        setDescriptionIsRequired,
        successScreen,
        setSuccessScreen,
        successVisible,
        setSuccessVisible,
        subFormData,
        handleTextChange,
        handleDropdownChange,
        setTitleError,
        titleError,
        setLoading,
        loading,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}


