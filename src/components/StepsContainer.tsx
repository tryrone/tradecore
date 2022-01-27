import React,{Fragment, useContext} from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
import { BookContext } from "../context/BookContext";
import { Step } from '../Types/stepType';
import useWindowDimensions from '../utils';

const PageHeader = styled.p`
    font-size:16px;
    color: ${Colors.main.black_01};
    font-weight: 600;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2em;
    flex-wrap: wrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    margin-top: 1em;
  }
`;

const StepWrap = styled.div<{active:boolean}>`
    height: 50px;
    width: 50px;
    border-radius: ${50 * 0.5}px;
    background-color: ${({active}) => active ? Colors.main.black_box_wrap : Colors.main.blue_light};
    display:flex;
    justify-content: center;
    align-items: center;
`;

const StepText = styled.div<{ active: boolean }>`
  font-size: 28px;
  font-weight: 500;
  color: ${({ active }) => (active ? Colors.main.white : Colors.main.blue_light_02)};
  text-align: center;
`;

const StepIndicator = styled.div`
  height: 1px;
  width: 20%;
  background-color: ${Colors.main.black_02};
  margin: 0px 1em;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    margin-top: 1em;
  }
`;

const StepName = styled.p<{ active: boolean; width?:string}>`
  position: absolute;
  bottom: -40px;
  font-size: 14px;
  font-weight: 600;
  text-align:center;
  width: ${({width}) => width?.length !== 0 ? width : 'auto'};
  color: ${({ active }) => (active ? Colors.main.inactive_black : Colors.main.black_01)};
`;

const StepsContainer = () => {
  const { steps } = useContext(BookContext);
  const { width } = useWindowDimensions();
  const textWidth = width <= 728 ? "auto" : "280%";

  return (
    <Fragment>
      <PageHeader>Add book - New book</PageHeader>
      <Row>
        {
          steps.map((step:Step,index)=>{
            return (
              <Fragment key={index + "step"}>
                <Column>
                  <StepWrap active={step.active}>
                    <StepText active={step.active}>
                      {step?.number || "..."}
                    </StepText>
                  </StepWrap>
                  {step?.name && (
                    <StepName
                      width={
                        step.number === 3 ? textWidth : ""
                      }
                      active={step.active}
                    >
                      {step.name}
                    </StepName>
                  )}
                </Column>
                {step.indicatorTo && <StepIndicator />}
              </Fragment>
            ); 
          })
        }
      </Row>
    </Fragment>
  );
}

export default StepsContainer;