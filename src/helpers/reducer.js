import initState from '../data/initState';

import characterFilter from './characterFilter';
import addMemberHelper from './addMemberHelper';

function reducer(state = initState, action){
  switch (action.type){
    case 'query-update':
      let filteredChars = characterFilter(action.value, state.eventFilters);
      let maxPages = Math.ceil(filteredChars.length/10);
      return {
        query: action.value,
        characters: filteredChars,
        events: state.events,
        eventFilters: state.eventFilters,
        maxPages: maxPages,
        currentPage: 1,
        teamMembers: state.teamMembers
      }
    case 'event-update':
      let filteredHeroes = characterFilter(state.query, action.value)
      let pageMax = Math.ceil(filteredHeroes.length/10);
      return {
        query: state.query,
        characters: filteredHeroes,
        events: state.events,
        eventFilters: action.value,
        maxPages: pageMax,
        currentPage: 1,
        teamMembers: state.teamMembers
      }
    case 'pageDown':
      let newPage = 1 < state.currentPage ? state.currentPage - 1 : state.currentPage;
      return {
        query: state.query,
        characters: state.characters,
        events: state.events,
        eventFilters: state.eventFilters,
        maxPages: state.maxPages,
        currentPage: newPage,
        teamMembers: state.teamMembers
      }
    case 'pageUp':
      let pageNew = state.maxPages > state.currentPage ? state.currentPage + 1 : state.currentPage;
      return {
        query: state.query,
        characters: state.characters,
        events: state.events,
        eventFilters: state.eventFilters,
        maxPages: state.maxPages,
        currentPage: pageNew,
        teamMembers: state.teamMembers
      }
    case 'addTeamMember': 
      let newTeam = addMemberHelper(action.value, state.teamMembers);
      return {
        query: state.query,
        characters: state.characters,
        events: state.events,
        eventFilters: state.eventFilters,
        maxPages: state.maxPages,
        currentPage: state.currentPage,
        teamMembers: newTeam
      }
  }
  return state;
}

export default reducer;