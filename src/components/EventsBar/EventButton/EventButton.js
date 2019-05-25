import React from 'react';

import './EventButton.css';

class EventButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: false
    }
  }

  toggleDescription = () => {
    let description = this.state.description;
    this.setState({description: !description})
  }

  showEventDescription = () => {
    return this.state.description
        ? (
          <p className="eventDescription">{this.props.event.description}</p>
        )
        : null
  }

  render(){
    let eventClasses = this.props.eventFilters.includes(this.props.event.title) ? "EventName EventActive" : "EventName";
    return(
      <div className="EventButton">
        <button className="DescButton" onClick={this.toggleDescription}>+</button>
        <button className={eventClasses} onClick={() => this.props.eventToggle(this.props.event.title)}>{this.props.event.title}</button>
        {this.showEventDescription()}
      </div>
    )
  }
}

export default EventButton;