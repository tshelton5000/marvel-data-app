import React from 'react';
import {connect} from 'react-redux';

import './Footer.css';
import leftArrow from '../../assets/iconfinder_icon-ios7-arrow-back_211686.png';
import rightArrow from '../../assets/iconfinder_icon-ios7-arrow-forward_211688.png';

const Footer = (props) => {
  return(
    <footer>
      <img className="pageToggle" src={leftArrow} alt="leftArrow" onClick={() => props.dispatch({type: 'pageDown'})}/>
      <span className="pageCount">Page {props.currentPage} of {props.maxPages > 1 ? props.maxPages : 1}</span>
      <img className="pageToggle" src={rightArrow} alt="rightArrow" onClick={() => props.dispatch({type: 'pageUp'})}/>
    </footer>
  )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Footer);