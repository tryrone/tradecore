import React,{useContext} from 'react';
import styled from "styled-components";
import Colors from '../Colors';
import books from '../books.json';
import { BookContext } from "../context/BookContext";
import useWindowDimensions from '../utils';

const genres = books.genres;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;
  flex-wrap: wrap;
`;

const EmptyBox = styled.div`
  padding: 18px 10px;
  min-width: 20%;
  border: 1px solid ${Colors.main.white};
  background-color: ${Colors.main.white};
  border-radius: 4px;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GenreBox = styled.div<{ active: boolean }>`
  padding: 18px 10px;
  min-width: 20%;
  border: 1px solid ${Colors.main.black_box_wrap};
  background-color: ${({ active }) =>
    active ? Colors.main.black_box_wrap : Colors.main.white};
  border-radius: 4px;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  @media (max-width: 768px) {
    min-width: 94%;
  }
`;

const GenreText = styled.div<{ active: boolean }>`
  font-size: 18px;
  font-weight: 500;
  color: ${({ active }) =>
    active ? Colors.main.white : Colors.main.black_box_wrap};
  text-align: center;
`;

const Genres = () => {

    const { width } = useWindowDimensions();
    const { 
      setActiveGenre, 
      activeGenre 
    } = useContext(BookContext);

  return (
    <Row>
      {genres.map((genre, index) => {
        return (
          <GenreBox
            onClick={() => setActiveGenre(genre)}
            active={activeGenre.id === genre.id}
            key={index + "genre"}
          >
            <GenreText active={activeGenre.id === genre.id}>
              {genre.name}
            </GenreText>
          </GenreBox>
        );
      })}
      {((genres.length % 4 !== 0) && width > 768 ) ? [1,1,1].map((item,index) => (
        <EmptyBox key={index} />
      )): null
    }
    </Row>
  );
}

export default Genres;
