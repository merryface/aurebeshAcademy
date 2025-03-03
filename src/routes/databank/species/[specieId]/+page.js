export const load = async ({fetch, params}) => {

  const fetchSpecie = async (id) => {
    const res = await fetch(`https://starwars-databank-server.vercel.app/api/v1/species/${id}`);
    const data = await res.json();
    return data;
  }

  return {
    specie: await fetchSpecie(params.specieId)
  }
}