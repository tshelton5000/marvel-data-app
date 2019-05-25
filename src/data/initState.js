import characterData from './characterData';
import eventData from './eventData';

export default {
  characters: characterData,
  events: eventData,
  query: '',
  eventFilters: [],
  maxPages: Math.ceil(characterData.length/10),
  currentPage: 1,
  teamMembers: []
}