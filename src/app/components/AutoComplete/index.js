import React from 'react';
import AutoCompleteInput from './components/AutoCompleteInput/index';
import {debounce} from 'throttle-debounce';
import $ from 'jquery';
import _ from 'underscore';
import {connect} from 'react-redux';
import {fetchPlaces, itemActivated, itemSelected, disposeSearchResults} from './actions';
import * as keyCodes from '../../constants/keyCodes';
import { browserHistory } from 'react-router';

class AutoCompleteContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("[AutoCompleteContainer] - constructor:: props ", this.props);
    this.handleChange = this.handleChange.bind(this);
    this.fetchItems = debounce(200, this.fetchItems);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleChange(event) {
    this.fetchItems(event.target.value);
  }

  handleKeyDown(e) {
    if (this.props.inProgress) return;

    const {activeItemEl} = this.props;
    let newActiveItemEl;

    switch(e.which) {
      case keyCodes.DOWN_ARROW:
        e.preventDefault();
        if (activeItemEl) {
          newActiveItemEl = $(activeItemEl).next();
        } else {
          newActiveItemEl = $('.places-litm-el li:nth-child(1)');
        }
        if (newActiveItemEl && newActiveItemEl.length > 0) {
          this.props.dispatch(itemActivated(newActiveItemEl));
          this.applySelected(activeItemEl, newActiveItemEl);
        }
        break;
      case keyCodes.UP_ARROW:
        e.preventDefault();
        if (activeItemEl) {
          if ($(activeItemEl).prev().length == 0) return;
          newActiveItemEl = $(activeItemEl).prev();
        } else {
          const lastItemIndex = this.props.matchedItems.length;
          console.warn("lastItemIndex ", lastItemIndex);
          newActiveItemEl = $(`.places-litm-el li:nth-child(${lastItemIndex})`);
        }

        if (newActiveItemEl && newActiveItemEl.length > 0) {
          this.props.dispatch(itemActivated(newActiveItemEl));
          this.applySelected(activeItemEl, newActiveItemEl);
        }

        break;
      case keyCodes.ENTER:
        e.preventDefault();
        if(!activeItemEl) break;
        const selectedItem = _.findWhere(this.props.matchedItems, {id: activeItemEl.attr('id')});
        console.warn("selectedItem is ", selectedItem);
        this.props.dispatch(itemSelected(selectedItem));
        break;
      case keyCodes.ESCAPE:
        e.preventDefault();
        this.props.dispatch(disposeSearchResults());
        break;
    }
  }

  applySelected(activeItemEl, newActiveItemEl) {
    $(activeItemEl).removeClass('selected');
    $(newActiveItemEl).addClass('selected');
  }

  fetchItems(value) {
    const searchText = value.toLowerCase();
    console.log("[AutoCompleteContainer] - fetchItems:: Search Text ", searchText);
    this.props.dispatch(fetchPlaces(searchText));
  }

  handleItemClick(item) {
    console.warn("selectedItem is ", item);
    this.props.dispatch(itemSelected(item));
  }

  render() {
    return(
      <AutoCompleteInput
        searchText={this.props.searchText}
        items={this.props.matchedItems}
        handleChange={this.handleChange}
        handleMove={this.handleKeyDown}
        handleClick={this.handleItemClick}
      />
    );
  }
}

const mapStateToProps = (state) => {
    console.log("[AutoCompleteContainer] - mapStateToProps:: state ", state);
    const {searchText, matchedItems, activeItemEl, inProgress} = state.places;

    return {searchText, matchedItems, activeItemEl, inProgress};
}

/**
 * Connect the component to the Redux store
 */
export default connect(mapStateToProps)(AutoCompleteContainer);
