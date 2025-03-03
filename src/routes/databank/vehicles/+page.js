import { fetchInformationFromEndpoint } from "$lib/data/starwars-databank.svelte";

export async function load({ url }) {
  // Get page from URL query params, default to 1
  const page = Number(url.searchParams.get('page') || 1);
  
  // Fetch data
  const vehiclesData = await fetchInformationFromEndpoint('vehicles', page);
  
  return {
    vehicles: vehiclesData.data || [],
    pageInfo: vehiclesData.info || { next: false, prev: false },
    currentPage: page
  };
}