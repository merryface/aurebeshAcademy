import { fetchInformationFromEndpoint } from "$lib/data/starwars-databank.svelte";

export async function load({ url }) {
  // Get page from URL query params, default to 1
  const page = Number(url.searchParams.get('page') || 1);
  
  // Fetch droid data
  const droidsData = await fetchInformationFromEndpoint('droids', page);
  
  return {
    droids: droidData.data || [],
    pageInfo: droidData.info || { next: false, prev: false },
    currentPage: page
  };
}