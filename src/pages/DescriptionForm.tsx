import TextInput from "../components/TextInput";
// import styled from "styled-components";
import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

// const Row = styled.span`
//   display: flex;
//   align-items: center;
//   width: 100%;
// `;

const DescriptionForm = () => {
  const[desc,setDesc] = useState('');

  const { setSuccessScreen, 
    // descriptionIsRequired 
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
          if (e.target.value.trim().length > 1) {
            // setSuccessScreen(true);
          }
        }}
      />
    </div>
  );
}

export default DescriptionForm;
