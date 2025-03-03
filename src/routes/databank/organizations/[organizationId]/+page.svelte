<script>
  import DataBankEntryPage from "$lib/components/DataBankEntryPage.svelte";
  let { data } = $props()
</script>

<DataBankEntryPage data={data} group="organizations" />