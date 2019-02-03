import React from 'react';
import {connect} from 'react-redux';

import Profile from './Profile/Profile';
import './Profiles.css';

const Profiles = (props) => {
  const mapPropsToProfile = () => {
    return props.characters.map((hero, i) => {
      return <Profile key={i} number={i} thumbnail={hero.thumbnail} name={hero.name} description={hero.description}/>
    })
  }
  return (
    <div className="Profiles">
      {mapPropsToProfile()}
    </div>
  )
}

const mapStateToProps = (state) => {
  let currentChars = state.characters.slice(state.currentPage*10, state.currentPage*10 + 10)
  return {characters: currentChars};
}

export default connect(mapStateToProps)(Profiles);