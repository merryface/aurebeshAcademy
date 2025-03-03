<script>
  import DataBankGroupPage from "$lib/components/DataBankGroupPage.svelte";
  let { data } = $props()
</script>

<DataBankGroupPage data={data} group="creatures" />