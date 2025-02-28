const randomNumberNotInArray = (array, upperLimit) => {
  let random = Math.floor(Math.random() * upperLimit);

  while (array.includes(random)) {
    random = Math.floor(Math.random() * upperLimit);
  }

  return random;
}

const fetchInformationFromEndpoint = async (dataGroup, pageNumber = null) => {
  const response = await fetch('https://starwars-databank-server.vercel.app/api/v1/' + dataGroup + (pageNumber ? '?page=' + pageNumber : ''))

  const data = await response.json()
  return data
}

// MAIN FUNCTION
async function updateInformationIfEmpty(dataGroup) {
  if (!groupSize[dataGroup]) {
    const data = await fetchInformationFromEndpoint(dataGroup);
    groupSize[dataGroup] = data.info.total;
  }

  const pageNumber = randomNumberNotInArray(pagesFetched[dataGroup], Math.ceil(groupSize[dataGroup] / 10));

  // check if data is already fetched. If it is, do not fetch again
  if (pagesFetched[dataGroup].includes(pageNumber)) {
    return;
  }

  // fetch data
  const newData = await fetchInformationFromEndpoint(dataGroup, pageNumber)
  databank[dataGroup] = newData.data;
  pagesFetched[dataGroup].push(pageNumber);
}



// States
const pagesFetched = $state({
  characters: [],
  creatures: [],
  droids: [],
  locations: [],
  organizations: [],
  species: [],
  vehicles: []
})

const groupSize = $state({
  characters: null,
  creatures: null,
  droids: null,
  locations: null,
  organizations: null,
  species: null,
  vehicles: null
})

export const databank = $state(
  {
    updateGroupInformation: (dataGroup) => updateInformationIfEmpty(dataGroup),
    groups: ['characters', 'creatures', 'droids', 'locations', 'organizations', 'species', 'vehicles'],
    characters: [],
    creatures: [],
    droids: [],
    locations: [],
    organizations: [],
    species: [],
    vehicles: []
  }
)

