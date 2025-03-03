import { fetchInformationFromEndpoint } from "$lib/data/starwars-databank.svelte";

export async function load({ url }) {
  // Get page from URL query params, default to 1
  const page = Number(url.searchParams.get('page') || 1);
  
  // Fetch characters data
  const organizationsData = await fetchInformationFromEndpoint('organizations', page);
  
  return {
    organizations: organizationsData.data || [],
    pageInfo: organizationsData.info || { next: false, prev: false },
    currentPage: page
  };
}