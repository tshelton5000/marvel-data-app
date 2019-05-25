import React from 'react';
import {connect} from 'react-redux';

import TeamMember from './TeamMember/TeamMember';
import './MyTeam.css';

const MyTeam = (props) => {
  const teamMapper = props.teamMembers.map(hero => {
    return <TeamMember hero={hero} key={hero.name} />
  })
  return (
    <div className="MyTeam">
      <p className="MyTeamTitle">My Team!</p>
      {teamMapper}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    teamMembers: state.teamMembers
  }
}

export default connect(mapStateToProps)(MyTeam);