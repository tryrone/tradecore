import { useState } from "react";
import styled from "styled-components";
import Colors from "../Colors";

const Title = styled.p`
  font-size: 15px;
  color: ${Colors.main.black_box_wrap};
  font-weight: 600;
  margin-bottom: 0.5em;
`;

const CustomFragment = styled.div<{ mt?: string }>`
  margin-top: ${({ mt }) => mt || "0px"};
  width: 100%;
`;

const DropDownContainer = styled("div")<{width:string}>`
  height: 2em;
  width: ${({ width }) => width};
  border: 2px solid ${Colors.main.border_light};
  padding-left: 8px;
  border-radius: 4px;
`;

const DropDownHeader = styled("div")<{active:boolean}>`
  font-size: 15px;
  font-weight: 500;
  color: ${({active}) => active ? Colors.main.black_01 : Colors.main.border_light};
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 12px;
  margin-top: -9px;
  justify-content: space-between;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 40%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  color: ${Colors.main.black_02};
  font-size: 15px;
  font-weight: 500;
`;

const ListItem = styled("li")`
  list-style: none;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 12px;
  padding-top: 0.7em;
  padding-bottom: 0.7em;
  cursor:pointer;
`;




const DropdownInput = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
      setSelectedOption(value);
      setIsOpen(false);
      props.onChange(value);
    };
  return (
    <CustomFragment mt={props.mt}>
      <Title>{props.placeholder}</Title>
      <DropDownContainer width={props.width}>
        <DropDownHeader
          active={selectedOption !== null ? true : false}
          onClick={toggling}
        >
          <p>{selectedOption || props?.placeholder}</p>
          <i className="fas fa-chevron-down"></i>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {props.options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </CustomFragment>
  );
};

export default DropdownInput;
