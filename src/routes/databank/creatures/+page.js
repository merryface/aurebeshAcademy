import { fetchInformationFromEndpoint } from "$lib/data/starwars-databank.svelte";

export async function load({ url }) {
  // Get page from URL query params, default to 1
  const page = Number(url.searchParams.get('page') || 1);
  
  // Fetch creatures data
  const creaturesData = await fetchInformationFromEndpoint('creatures', page);
  
  return {
    creatures: creaturesData.data || [],
    pageInfo: creaturesData.info || { next: false, prev: false },
    currentPage: page
  };
}