import initState from '../data/initState';

import characterFilter from './characterFilter';

function reducer(state = initState, action){
  switch (action.type){
    case 'query-update':
      let filteredChars = characterFilter(action.value, state.eventFilters);
      let maxPages = Math.floor(filteredChars.length/10);
      return {
        query: action.value,
        characters: filteredChars,
        events: state.events,
        eventFilters: state.eventFilters,
        maxPages: maxPages,
        currentPage: 0
      }
    case 'event-update':
      let filteredHeroes = characterFilter(state.query, action.value)
      let pageMax = Math.floor(filteredHeroes.length/10);
      return {
        query: state.query,
        characters: filteredHeroes,
        events: state.events,
        eventFilters: action.value,
        maxPages: pageMax,
        currentPage: 0
      }
    case 'pageDown':
      let newPage = 0 < state.currentPage ? state.currentPage - 1 : state.currentPage;
      console.log(state.currentPage, state.maxPages);
      return {
        query: state.query,
        characters: state.characters,
        events: state.events,
        eventFilters: state.eventFilters,
        maxPages: state.maxPages,
        currentPage: newPage
      }
    case 'pageUp':
      let pageNew = state.maxPages > state.currentPage ? state.currentPage + 1 : state.currentPage;
      console.log(state.currentPage, state.maxPages);
      return {
        query: state.query,
        characters: state.characters,
        events: state.events,
        eventFilters: state.eventFilters,
        maxPages: state.maxPages,
        currentPage: pageNew
      }
  }
  return state;
}

export default reducer;