export const load = async ({fetch, params}) => {

  const fetchCharacter = async (id) => {
    const res = await fetch(`https://starwars-databank-server.vercel.app/api/v1/characters/${id}`);
    const data = await res.json();
    return data;
  }

  return {
    character: await fetchCharacter(params.characterId)
  }
}