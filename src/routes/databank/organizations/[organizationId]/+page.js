export const load = async ({fetch, params}) => {

  const fetchOrganization= async (id) => {
    const res = await fetch(`https://starwars-databank-server.vercel.app/api/v1/organizations/${id}`);
    const data = await res.json();
    return data;
  }

  return {
    organization: await fetchOrganization(params.organizationId)
  }
}