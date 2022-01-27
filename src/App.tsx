
import { BookProvider } from "./context/BookContext";
import Content from "./pages/Content";



function App() {
  
  
  return (
    <div className="App">
      <BookProvider>
        <Content />
      </BookProvider>
    </div>
  );
}

export default App;
