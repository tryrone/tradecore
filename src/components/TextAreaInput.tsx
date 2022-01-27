import styled from "styled-components";
import Colors from "../Colors";

const InputBox = styled.textarea<{ width: string }>`
  height: auto;
  width: ${({ width }) => width};
  border: 2px solid ${Colors.main.border_light};
  padding-top: 0.5em;
  padding-left: 8px;
  padding-bottom: 2em;
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${Colors.main.border_light};
  }
`;

const Title = styled.p`
  font-size: 15px;
  color: ${Colors.main.black_box_wrap};
  font-weight: 600;
  margin-bottom: 0.5em;
`;

const CustomFragment = styled.div<{ mt?: string }>`
  margin-top: ${({ mt }) => mt || "0px"};
  width: 100%;
  position: relative;
`;

const IconImg = styled.img`
  height: 20px;
  width: 60px;
  object-fit: fill;
  position: absolute;
  left:10px;
  bottom: 3px;
`;

const TextAreaInput = (props) => {
    const image = require("../assets/textAreaFunc.png");
  return (
    <CustomFragment mt={props.mt}>
      <Title>{props.placeholder}</Title>
      <InputBox {...props} />
      <IconImg src={image} />
    </CustomFragment>
  );
};

export default TextAreaInput;
