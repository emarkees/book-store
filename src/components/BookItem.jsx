import React, { useState } from 'react';
import '../index.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import ApexChart from './Chart';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ bookProp }) => {
  const [chart, setChart] = useState(0);
  const [edit, setEdit] = useState(false);
  const [series, setSeries] = useState(5);
  const dispatch = useDispatch();

  const viewMode = {};
  const editMode = {};

  if (edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEdit = () => {
    setEdit(true);
  };

  const handleRemove = () => {
    dispatch(removeBook(bookProp.item_id));
  };

  const handleUpdateProgress = () => {
    const newSeries = chart + bookProp.chapterCount;
    setChart(newSeries);
    // Update the series array
    setSeries((prevSeries) => {
      const updatedSeries = prevSeries.map((value, index) => {
        if (index < newSeries) {
          // Previous progress, set to 100%
          return 100;
        }
        // Current progress, set to 0%
        return 0;
      });
      return updatedSeries;
    });
  };

  return (
    <Card className="bag">
      <div className="container">
        <h5 className="category-header">{bookProp.category}</h5>
        <h1>{bookProp.title}</h1>
        <h5>{bookProp.author}</h5>
        <div className="title-container">
          <button type="button">Comment</button>
          {' '}
          |
          <button type="button" onClick={handleRemove}>Remove</button>
          |
          <button type="button" onClick={handleEdit}>Edit</button>
        </div>
      </div>

      <div className="chart">
        <ApexChart series={series} />
        {/* Additional JSX elements here if needed */}
      </div>
      <div className="chapter">
        <h2>CHAPTER</h2>
        <button type="button" onClick={handleUpdateProgress}>UPDATE PROGRESS</button>
      </div>
    </Card>
  );
};

BookItem.propTypes = {
  bookProp: PropTypes.shape({
    item_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    chapterCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookItem;
