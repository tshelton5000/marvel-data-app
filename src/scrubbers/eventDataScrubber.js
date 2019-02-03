const eventDataScrubber = (json) => {
  return json.map(el => {
    return {
      title: el.title,
      description: el.description,
      thumbnail: el.thumbnail,
      characters: el.characters
    }
  })
}

export default eventDataScrubber;