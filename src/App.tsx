import styled from 'styled-components';
import StepsContainer from './components/StepsContainer';
import useWindowDimensions from './utils';
import { BookProvider } from "./context/BookContext";
import Genres from './pages/Genres';
import Colors from './Colors';
import NavigatorBtnContainer from './components/NavigatorBtnContainer';


function App() {
  const {width} = useWindowDimensions();
  
  const Wrapper = styled.div`
    max-width: ${width * 0.6}px;
    border: 1.8px solid ${Colors.main.border_light};
    margin: 10em auto;
    border-radius: 8px;
    padding: 16px;
    @media (max-width: 768px) {
      max-width: ${width}px;
      margin: 2em auto;
      border: 1.8px solid ${Colors.main.white};
    }
  `;

  
  return (
    <div className="App">
      <BookProvider>
        <Wrapper>
          <StepsContainer />
          <Genres />
          <NavigatorBtnContainer/>
        </Wrapper>
      </BookProvider>
    </div>
  );
}

export default App;
