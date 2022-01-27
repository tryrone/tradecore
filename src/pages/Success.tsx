import {Fragment, useContext} from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
import { BookContext } from "../context/BookContext";

const CheckImg = styled.img`
  height: auto;
  width: 25%;
  object-fit: contain;
  margin: 2em auto;
  @media (max-width: 768px) {
    width: 45%;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${Colors.main.black_01};
  text-align: center;
`;


const BtnWrap = styled.div`
  height: 2.5em;
  width: 37%;
  position: relative;
  margin: 2em auto;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.main.black_box_wrap};
  background-color: ${Colors.main.black_box_wrap};
  cursor: pointer;
  :hover {
    background-color: ${Colors.main.black_box_wrap_hover};
  }

  @media (max-width: 768px) {
    margin: 1em auto;
    width: 100%;
  }
`;

const BtnText = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: ${Colors.main.white};
`;

const check = require('../assets/check.png');

const Success = () => {
     const {
       setSteps,
       setActiveGenre,
       setAddNewBook,
       setSuccessScreen,
       setDescriptionIsRequired,
       setActiveSubGenre,
       setSuccessVisible,
       setTitleError,
     } = useContext(BookContext);

  const resetForm = () => {
    setActiveSubGenre({});
    setDescriptionIsRequired(false);
    setSuccessVisible(false);
    setSuccessScreen(false);
    setAddNewBook(false);
    setActiveGenre({});
    setTitleError(false);
    setSteps([
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
  }
  return (
    <Fragment>
      <FlexBox>
        <CheckImg src={check} />
      </FlexBox>

      <Text>Book added Successfully</Text>

      <BtnWrap onClick={() => resetForm()}>
        <BtnText>Add another book</BtnText>
      </BtnWrap>
    </Fragment>
  );
}

export default Success;
