import charData from '../data/characterData.json';

const characterFilter = (query, events) => {
  let filteredHeroes = charData.filter(hero => {
    return events.length === hero.events.items.filter(event => {
      return events.includes(event.name);
    }).length
  })

  return filteredHeroes.filter(hero => {
    return hero.name.toLowerCase().includes(query.toLowerCase())
  })
}

export default characterFilter;