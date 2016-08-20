import React from 'react';
import AutoCompleteResults from './components/AutoCompleteInputResult/index';

const AutoCompleteInput = (props) => {
  return(
    <div className="row">
      <input
        onKeyDown={props.handleMove}
        type="text"
        className="input-lg auto-complte-search-input form-control"
        placeholder="Search"
        onChange={props.handleChange}
      />
      <span className='locationReset'/>
      <AutoCompleteResults
        searchText={props.searchText}
        items={props.items}
        handleClick={props.handleClick}
      />
      <h2>{props.inProgress}</h2>
    </div>
  );
};

export default AutoCompleteInput;
