export const load = async ({fetch, params}) => {

  const fetchCreature = async (id) => {
    const res = await fetch(`https://starwars-databank-server.vercel.app/api/v1/creatures/${id}`);
    const data = await res.json();
    return data;
  }

  return {
    creature: await fetchCreature(params.creatureId)
  }
}