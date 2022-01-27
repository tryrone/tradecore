import DropdownInput from '../components/DropdownInput';
import TextInput from '../components/TextInput';
import styled from 'styled-components';
import useWindowDimensions from '../utils';
import TextAreaInput from '../components/TextAreaInput';
import { useContext } from 'react';
import { BookContext } from '../context/BookContext';



const Row = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ErrorText = styled.p`
  font-size: 12px;
  color:red;
`;

function SubGenreForm() {
  const { width } = useWindowDimensions();
  
  const twentyPercentWidth = width <= 728 ? '98%' : '20%';
  const rowPercetageWidth = width <= 728 ? '98%' : '50%';

  const {
    handleTextChange,
    handleDropdownChange,
    subFormData,
    titleError,
  } = useContext(BookContext);

  return (
    <div>
      <TextInput
        name="bookTitle"
        width="98%"
        value={subFormData.bookTitle}
        onChange={(e) => {
          handleTextChange(e, "bookTitle");
        }}
        mt="2em"
        placeholder="Book title"
      />
      {titleError && <ErrorText>Title is required</ErrorText>}

      <DropdownInput
        placeholder="Author"
        width="98%"
        options={["beyonce knowles", "childish gambino"]}
        onChange={(val) => {
          handleDropdownChange(val, "author");
        }}
      />

      <TextInput
        value={subFormData.isbn}
        onChange={(e) => {
          handleTextChange(e, "isbn");
        }}
        name="isbn"
        width="98%"
        mt="12px"
        placeholder="ISBN"
      />

      <DropdownInput
        placeholder="Publisher"
        width="98%"
        options={["Jameson", "scott askins"]}
        onChange={(val) => {
          handleDropdownChange(val, "publisher");
        }}
      />

      <TextInput
        name="date"
        type="date"
        value={subFormData.date}
        onChange={(e) => {
          handleTextChange(e, "date");
        }}
        width={twentyPercentWidth}
        mt="12px"
        placeholder="Date Published"
      />

      <TextInput
        name="noOfPages"
        width={twentyPercentWidth}
        value={subFormData.noOfPages}
        onChange={(e) => {
          handleTextChange(e, "noOfPages");
        }}
        mt="12px"
        placeholder="Number of Pages"
      />

      <DropdownInput
        placeholder="Format"
        width={twentyPercentWidth}
        options={["pdf", "word", "Jpeg"]}
        onChange={(val) => {
          handleDropdownChange(val, "format");
        }}
      />

      <Row>
        <TextInput
          name="edition"
          width={rowPercetageWidth}
          value={subFormData.edition}
          onChange={(e) => {
            handleTextChange(e, "edition");
          }}
          placeholder="Edition"
        />

        <DropdownInput
          placeholder="Edition language"
          width={rowPercetageWidth}
          options={["English", "French", "German"]}
          onChange={(val) => {
            handleDropdownChange(val, "editionLanguage");
          }}
        />
      </Row>

      <TextAreaInput
        value={subFormData.descrition}
        onChange={(e) => {
          handleTextChange(e, "description");
        }}
        name="description"
        width="98%"
        placeholder="Description"
      />
    </div>
  );
}

export default SubGenreForm;
