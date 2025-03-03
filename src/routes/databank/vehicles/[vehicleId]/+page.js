export const load = async ({fetch, params}) => {

  const fetchVehicle= async (id) => {
    const res = await fetch(`https://starwars-databank-server.vercel.app/api/v1/vehicles/${id}`);
    const data = await res.json();
    return data;
  }

  return {
    vehicle: await fetchVehicle(params.vehicleId)
  }
}