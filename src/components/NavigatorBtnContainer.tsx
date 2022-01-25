import styled from "styled-components";
import Colors from '../Colors';

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

const BtnText = styled.p<{ active: boolean }>`
  font-size: 14px;
  font-weight: 600;
  text-align:center;
  color: ${({ active }) =>
    active ? Colors.main.white : Colors.main.black_box_wrap};
`;

const FloatingIcon = styled.i`
  position: absolute;
  left: 10px;
  color: grey;
`;


const NavigatorBtnContainer = () => {
  return (
    <NaviagtorCont>
      <Row>
        <BtnWrap mr="1em" blackBg={false}>
          <FloatingIcon className="fas fa-chevron-left"></FloatingIcon>
          <BtnText active={false}>Back</BtnText>
        </BtnWrap>
        <BtnWrap blackBg={true}>
          <BtnText active={true}>Add</BtnText>
        </BtnWrap>
      </Row>
    </NaviagtorCont>
  );
}

export default NavigatorBtnContainer;
