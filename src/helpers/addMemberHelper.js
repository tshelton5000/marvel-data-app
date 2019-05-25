import charData from '../data/characterData';

const addMemberHelper = (heroName, currentRoster) => {
  let heroNames = currentRoster.map(hero => hero.name);
  let hero = charData.filter(hero => hero.name === heroName);
  return heroNames.includes(heroName) ? currentRoster: currentRoster.concat(hero);
}

export default addMemberHelper;