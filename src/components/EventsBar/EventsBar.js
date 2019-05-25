import React from 'react';
import {connect} from 'react-redux';

import EventButton from './EventButton/EventButton';
import './EventsBar.css';

class EventsBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filters: []
    }
  }

  eventToggle = (event) => {
    if (this.state.filters.includes(event)){
      let _filters = this.state.filters.filter(filter => filter !== event)
      this.setState({filters: _filters}, this.pushChangesToStore);
    } else {
      let _filters = this.state.filters.concat(event);
      this.setState({filters: _filters}, this.pushChangesToStore);
    }
  }

  pushChangesToStore = () => {
    this.props.dispatch({type: 'event-update', value: this.state.filters})
  }

  mapPropsToButtons = () => {
    return this.props.events.map(event => {
      return <EventButton key={event.title} eventToggle={this.eventToggle} event={event} eventFilters={this.props.eventFilters}/>
    })
  }

  render(){
    return(
      <div className="TestComp">
        <p className="FilterTitle">Search by Marvel Stories!</p>
        {this.mapPropsToButtons()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    eventFilters: state.eventFilters
  }
}

export default connect(mapStateToProps)(EventsBar);