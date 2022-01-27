import styled from 'styled-components';
import Colors from '../Colors';

const InputBox = styled.input<{ width: string }>`
  height: 2em;
  width: ${({ width }) => width};
  border: 2px solid ${Colors.main.border_light};
  padding-left: 8px;
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

const CustomFragment = styled.div<{mt?:string}>`
  margin-top: ${({mt}) => mt || '0px'};
  width: 100%;
`;



const TextInput = (props) => {
  return (
    <CustomFragment mt={props.mt}>
      {!props.hideTitle && <Title>{props.placeholder}</Title>}
      <InputBox
        {...props}
      />
    </CustomFragment>
  );
};

export default TextInput;
