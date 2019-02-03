import React from 'react';
import {connect} from 'react-redux';

import './Navbar.css';
import MarvelLogo from './MarvelLogo/MarvelLogo';

class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      timer: null,
      input: ''
    }
  }

  handleChange = (e) => {
    clearTimeout(this.state.timer);
    let timer = setTimeout(() => {
      this.props.dispatch({
        type: 'query-update',
        value: this.state.input
      })
    }, 1000)
    this.setState({input: e.target.value, timer: timer})
  }

  render(){
    return(
      <nav className={'Navbar'}>
        <MarvelLogo />
        <input value={this.state.input} placeholder="Search by Character!" onChange={this.handleChange}/>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query
  }
}

export default connect(mapStateToProps)(Navbar);