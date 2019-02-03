import React from 'react';

import './Profile.css';
import MarvelBG from '../../../assets/MarvelBG.jpg';

const Profile = (props) => {
  const descTrimmer = (string) => {
    return string.length === 0
              ? 'Character information unavailable'
           : string.length > 275
              ? string.substring(0, 200) + '...'
           : string; 
  }

  const stylePicker = () => {
    return props.number % 4 === 0 ? {'backgroundColor': '#370001'}
           : props.number % 4 === 1 ? {'backgroundColor': '#382E00'}
           : props.number % 4 === 2 ? {'backgroundColor': '#0B0326'}
           : {'backgroundColor': '#022D00'}
  }

  return(
    <div className="charContainer" style={stylePicker()}>
      <img className="avatarPic" src={`${props.thumbnail.path}/standard_xlarge.${props.thumbnail.extension}`}
           alt="Hero Avatar"/>
      <div className="caption">
        <img src={MarvelBG} className="bgImg"/>
        <p className="heroName">{props.name}</p>
        <p className="heroDesc">{descTrimmer(props.description)}</p>
      </div>
    </div>
  )
}

export default Profile;