export const load = async ({fetch, params}) => {

  const fetchLocation = async (id) => {
    const res = await fetch(`https://starwars-databank-server.vercel.app/api/v1/locations/${id}`);
    const data = await res.json();
    return data;
  }

  return {
    location: await fetchLocation(params.locationId)
  }
}