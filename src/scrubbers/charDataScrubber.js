const charDataScrubber = (json) => {
  return json.filter(el => {
    return el.events.items.length > 0
  })
}

export default charDataScrubber;