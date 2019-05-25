import React from 'react';

import './TeamMember.css';

const TeamMember = (props) => {
  console.log(props);
  return (
    <div className="memberBucket">
      <img src={`${props.hero.thumbnail.path}/portrait_xlarge.${props.hero.thumbnail.extension}`} />
    </div>
  )
}

export default TeamMember;