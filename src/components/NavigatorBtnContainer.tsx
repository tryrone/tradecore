import { useContext } from "react";
import styled from "styled-components";
import { BookContext } from "../context/BookContext";
import Colors from "../Colors";
import { Step } from "../Types/stepType";


const NaviagtorCont = styled.div`
  margin-top: 1.5em;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @media (max-width: 768px) {
    margin-bottom: 5em;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BtnWrap = styled.div<{ blackBg: boolean; mr?: string }>`
  height: 2.4em;
  width: 15%;
  z-index: 3;
  position: relative;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.main.black_box_wrap};
  background-color: ${({ blackBg }) =>
    blackBg ? Colors.main.black_box_wrap : Colors.main.white};
  cursor: pointer;
  margin-right: ${({ mr }) => mr || "0px"};

  :hover {
    background-color: ${({ blackBg }) =>
      blackBg ? Colors.main.black_box_wrap_hover : Colors.main.white};
  }

  @media (max-width: 768px) {
    margin-right: 0px;
    margin-top: 1em;
    width: 100%;
  }
`;

const BtnText = styled.p<{ active: boolean; }>`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: ${({ active }) => active ? Colors.main.white : Colors.main.black_box_wrap};
`;

const FloatingIcon = styled.i`
  position: absolute;
  left: 10px;
  color: grey;
`;

const WhiteLoader = styled.div`
  height: 2.4em;
  width: 100%;
  position: absolute;
  border: 1px solid ${Colors.main.white};
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 5;
  border-radius: 4px;
`;

const NavigatorBtnContainer = ({ setActiveStep, activeStep }: any) => {
  const {
    steps,
    handleStepChange,
    activeGenre,
    activeSubGenre,
    addNewBook,
    setAddNewBook,
    descriptionIsRequired,
    successScreen,
    setSuccessVisible,
    setSuccessScreen,
    subFormData,
    setTitleError,
    setLoading,
    loading
  } = useContext(BookContext);


  const Next = (StepNumber: number) => { 
    if (StepNumber === 2 && Object.keys(activeGenre).length === 0) return;
    if (StepNumber === 4 && steps.length === 3 && !successScreen) return;
    if (StepNumber === 3 && Object.keys(activeSubGenre).length === 0 && !addNewBook) return;
    
    const thirdStepIsAvailable = steps.find((x) => x.number === 3);

    const subGenreIsSelectedAndDescriptionIsFalse =
      !addNewBook &&
      Object.keys(activeSubGenre).length !== 0 &&
      !descriptionIsRequired;
    
    const subGenreIsSelectedAndDescriptionIsTrue =
      !addNewBook &&
      Object.keys(activeSubGenre).length !== 0 &&
      descriptionIsRequired;

    const addNewBookIsTrueSubgenreFalse =
      addNewBook &&
      Object.keys(activeSubGenre).length === 0 &&
      !descriptionIsRequired;

      if (
        (subGenreIsSelectedAndDescriptionIsFalse ||
        subGenreIsSelectedAndDescriptionIsTrue) && !successScreen
      ) {
        // navigating to the third tab
        const stepsCopy = [...steps];
        stepsCopy.forEach((step: Step) => (step.active = false));
        const filteredOutNullStep = stepsCopy.filter(
          (obj) => obj.number !== null
        );
        filteredOutNullStep.push({
          name: "Add new subgenre",
          number: 3,
          active: true,
          indicatorTo: false,
        });
        handleStepChange(filteredOutNullStep);
        setActiveStep(StepNumber);
      } else if (addNewBookIsTrueSubgenreFalse) {
        // when you are about to add a new book
        const stepsCopy = [...steps];
        stepsCopy.forEach((step: Step) => (step.active = false));
        const filteredOutNullStep = stepsCopy.filter(
          (obj) => obj.number !== null
        );

        if (thirdStepIsAvailable && StepNumber === 4) {
          const objIndex = stepsCopy.findIndex(
            (obj) => obj.number === StepNumber
          );
          steps[objIndex].active = true;
          handleStepChange(stepsCopy);
          return setActiveStep(StepNumber);
        } else if (!thirdStepIsAvailable && StepNumber === 3) {
          filteredOutNullStep.push({
            name: "Add new subgenre",
            number: 3,
            active: true,
            indicatorTo: true,
          });
          filteredOutNullStep.push({
            name: "Information",
            number: 4,
            active: false,
            indicatorTo: false,
          });
          handleStepChange(filteredOutNullStep);
          setActiveStep(StepNumber);
        } else if (steps.length === 4 && !successScreen) {
          if (!subFormData?.bookTitle) {
            setTitleError(true);
          } else {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              console.log({ subFormData });
              setActiveStep(1);
              return setSuccessVisible(true);
            }, 4000);
          }
        }
      } else {
        if (steps.length === 3 && successScreen) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setActiveStep(1);
            return setSuccessVisible(true);
          }, 4000);
        }  else {
          const stepsCopy = [...steps];
          stepsCopy.forEach((step: Step) => (step.active = false));
          const objIndex = stepsCopy.findIndex(
            (obj) => obj.number === StepNumber
          );
          steps[objIndex].active = true;
          handleStepChange(stepsCopy);
          setActiveStep(StepNumber);
        }
        
      } 
  };

  const Back = (StepNumber: number) => {
    if (StepNumber === 0) return;
    if(StepNumber === 1) setAddNewBook(false);
    const stepsCopy = [...steps];
    if(StepNumber === 3){
      stepsCopy.forEach((step: Step) => (step.active = false));
      const objIndex = stepsCopy.findIndex((obj) => obj.number === StepNumber);
      steps[objIndex].active = true;
      handleStepChange(stepsCopy);
      setActiveStep(StepNumber);
      setSuccessScreen(false);
    }else if( StepNumber === 2 && steps.length === 3){
      stepsCopy.pop();
      stepsCopy.push({
        name: null,
        number: null,
        active: false,
        indicatorTo: false,
      });
      setSuccessScreen(false);
    }else if (StepNumber === 2 && steps.length === 4){
      stepsCopy.pop();
      stepsCopy.pop();
      stepsCopy.push({
        name: null,
        number: null,
        active: false,
        indicatorTo: false,
      });
    }
    stepsCopy.forEach((step: Step) => (step.active = false));
    const objIndex = stepsCopy.findIndex((obj) => obj.number === StepNumber);
    steps[objIndex].active = true;
    handleStepChange(stepsCopy);
    setSuccessScreen(false);
    setActiveStep(StepNumber);
  };


  return (
    <NaviagtorCont>
      <Row>
        {activeStep !== 1 && (
          <BtnWrap
            mr="1em"
            onClick={() => Back(activeStep - 1)}
            blackBg={false}
          >
            <FloatingIcon className="fas fa-chevron-left"></FloatingIcon>
            <BtnText active={false}>Back</BtnText>
          </BtnWrap>
        )}

        <BtnWrap onClick={() => Next(activeStep + 1)} blackBg={true}>
          {loading && <WhiteLoader />}
          <BtnText active={true}>
            {loading
              ? "Submitting..."
              : (steps.length === 4 && activeStep === 4) ||
                (steps.length === 3 && activeStep === 3)
              ? "Complete"
              : "Next"}
          </BtnText>
        </BtnWrap>
      </Row>
    </NaviagtorCont>
  );
};

export default NavigatorBtnContainer;
