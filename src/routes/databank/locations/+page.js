import { fetchInformationFromEndpoint } from "$lib/data/starwars-databank.svelte";

export async function load({ url }) {
  // Get page from URL query params, default to 1
  const page = Number(url.searchParams.get('page') || 1);
  
  // Fetch characters data
  const locationsData = await fetchInformationFromEndpoint('locations', page);
  
  return {
    locations: locationsData.data || [],
    pageInfo: locationsData.info || { next: false, prev: false },
    currentPage: page
  };
}