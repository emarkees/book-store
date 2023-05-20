import React, { useState, useRef } from 'react';
import '../index.css';
import { PropTypes } from 'prop-types';
import ApexChart from './Chart';

const BookItem = ({
  bookProp, /* removeBook */ setUpdate, category,
}) => {
  const [chart, setChart] = useState(0);
  const editInputRef = useRef(null);

  const [edit, setEdit] = useState(false);
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

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setUpdate(editInputRef.current.value, bookProp.id, category.id);
    }
  };

  const handleUpdateProgress = () => {
    // Assuming the number of chapters is stored in bookProp.chapterCount
    setChart(chart + bookProp.chapterCount);
  };

  return (
    <main className="bag">
      <div className="container">
        <h1>{category}</h1>
        <h1>{bookProp.title}</h1>
        <div className="title-container">
          <button type="button">Comment</button>
          {' '}
          |
          <button type="button">Remove</button>
          |
          <button type="button" onClick={handleEdit}> Edit </button>
        </div>

        <input
          type="text"
          onKeyDown={handleUpdateDone}
          ref={editInputRef}
          defaultValue={bookProp.title}
          style={editMode}
        />
      </div>

      <div className="chart">
        <ApexChart />
      </div>
      <div className="chapter">
        <h2>CHAPTER</h2>
        <button type="button" onClick={handleUpdateProgress}>UPDATE PROGRESS</button>
      </div>
    </main>
  );
};

BookItem.propTypes = {
/*  addBookItem: PropTypes.func.isRequired, */
  bookProp: PropTypes.func.isRequired,
  /*  removeBook: PropTypes.func.isRequired, */
  setUpdate: PropTypes.func.isRequired,
  category: PropTypes.func.isRequired,
};

export default BookItem;
