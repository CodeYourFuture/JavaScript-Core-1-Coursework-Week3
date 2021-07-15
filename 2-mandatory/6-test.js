function getTransportModes(placesAndModes) {
  const modesOnly = placesAndModes.slice(1); //copy of placesAndModes using .slice(), only has items 1 index onwards
  return modesOnly; //returns only modes
}

//gives same value if placesAndModes is used in place of modesOnly
function isAccessibleByTransportMode(modesOnly, string) {
   return modesOnly.includes(string) //checks if modesOnly array contains relevant mode's string
   
}

function getLocationName(placesAndModes) {
  const placesOnly = placesAndModes[0]; //create new array, stores 1st item (location)
  return placesOnly; // returns 0 index item as string
}
