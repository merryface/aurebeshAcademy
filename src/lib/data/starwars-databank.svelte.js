const fetchInformationFromEndpoint = async (dataGroup) => {
  const response = await fetch('https://starwars-databank-server.vercel.app/api/v1/' + dataGroup)
  const data = await response.json()
  return data.data
}


async function updateInformationIfEmpty(dataGroup) {
  if (!databank[dataGroup] || databank[dataGroup].length === 0) {
    const newData = await fetchInformationFromEndpoint(dataGroup);
    databank[dataGroup] = newData;
  }
}


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

