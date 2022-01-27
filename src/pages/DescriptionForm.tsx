import TextInput from "../components/TextInput";
import styled from "styled-components";
import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import Colors from "../Colors";

const Row = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1em;
  cursor:pointer;
`;

const Square = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 4px;
  margin-right: 0.4em;
  border: 1px solid ${Colors.main.black_01};
`;

const DescriptionForm = () => {
  const[desc,setDesc] = useState('');

  const { 
    setSuccessScreen, 
    steps,
    descriptionIsRequired 
  } = useContext(BookContext);

  return (
    <div>
      <TextInput
        name="subgenreName"
        width="98%"
        mt="2em"
        pattern="/^\S*$/"
        hideTitle
        placeholder="Subgenre name"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value.trim());
          if ((e.target.value.trim().length > 1) && (steps.length === 3)) {
            setSuccessScreen(true);
          }
        }}
      />

      {descriptionIsRequired && (
        <Row>
          <Square />
          Description is required
        </Row>
      )}
    </div>
  );
}

export default DescriptionForm;
