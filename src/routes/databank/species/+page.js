import { fetchInformationFromEndpoint } from "$lib/data/starwars-databank.svelte";

export async function load({ url }) {
  // Get page from URL query params, default to 1
  const page = Number(url.searchParams.get('page') || 1);
  
  // Fetch data
  const speciesData = await fetchInformationFromEndpoint('species', page);
  
  return {
    species: speciesData.data || [],
    pageInfo: speciesData.info || { next: false, prev: false },
    currentPage: page
  };
}