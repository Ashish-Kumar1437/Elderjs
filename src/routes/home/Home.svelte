<script>
  import ProductCard from '../../components/ProductCard.svelte';

  export let data, helpers;
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    gap: 10px;
    justify-content: center;
  }
</style>

<div class="container">
  {#each data.externalData as data}
    <ProductCard link={helpers.permalinks.detailProduct({ slug: data.id })} {data} />
  {/each}
</div>
