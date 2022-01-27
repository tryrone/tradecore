import React, { useContext, useState } from "react";
import Genres from "../pages/Genres";
import Colors from "../Colors";
import NavigatorBtnContainer from "../components/NavigatorBtnContainer";
import SubGenres from "../pages/SubGenres";
import styled from "styled-components";
import StepsContainer from "../components/StepsContainer";
import { BookContext } from "../context/BookContext";
import SubGenreForm from "./SubGenreForm";
import DescriptionForm from "./DescriptionForm";
import Success from "./Success";

const Wrapper = styled.div`
  max-width: ${window.innerWidth * 0.6}px;
  border: 1.8px solid ${Colors.main.border_light};
  margin: 10em auto;
  border-radius: 8px;
  padding: 16px;
  @media (max-width: 768px) {
    max-width: ${window.innerWidth}px;
    margin: 2em auto;
    border: 1.8px solid ${Colors.main.white};
  }
`;

function Content() {
    // const { width } = useWindowDimensions();
    const {
      activeGenre,
      addNewBook,
      successVisible,
    } = useContext(BookContext);
    const [activeStep, setActiveStep] = useState(1);
    

    
  return (
    <Wrapper>
      {successVisible && <Success />}
      {!successVisible && <StepsContainer />}

      {activeStep === 1 && !successVisible && <Genres />}
      {activeStep === 2 &&
        !successVisible &&
        Object.keys(activeGenre).length !== 0 && <SubGenres />}
      {activeStep === 3 && !successVisible && <DescriptionForm />}
      {activeStep === 4 && addNewBook && !successVisible && <SubGenreForm />}
      {!successVisible && (
        <NavigatorBtnContainer
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        />
      )}
    </Wrapper>
  );
}

export default Content;
