export const load = async ({fetch, params}) => {

  const fetchDroid = async (id) => {
    const res = await fetch(`https://starwars-databank-server.vercel.app/api/v1/droids/${id}`);
    const data = await res.json();
    return data;
  }

  return {
    droid: await fetchDroid(params.droidId)
  }
}