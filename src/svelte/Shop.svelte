<script lang="ts">
  import { onMount } from 'svelte'
  import { querystring } from 'svelte-spa-router'
  import { filters, Categories } from '../data/filters'
  import { fetchProducts } from '@/libs/graphql'
  import FilterItem from './components/FilterItem.svelte'
  import ProductCard from './components/ProductCard.svelte'
  import type { PageInfo } from '../types/wp-response'
  import type { Product } from '../types/product'

  $: urlSearch = new URLSearchParams($querystring)
  $: filter = urlSearch.get('filter') ?? Categories.ALL

  $: currentProducts = [] as Product[]
  $: currentPageInfo = {
    endCursor: "",
    hasNextPage: false,
  } as PageInfo
  $: pageState = ""

  onMount(() => {
    pageState = "loading"
    fetchProducts(filter, currentPageInfo.endCursor)
      .then(({products, pageInfo}) => {
        currentProducts = products
        currentPageInfo = pageInfo
        pageState = "ready"
      })
  })
</script>

<section class="max-w-6xl mx-auto py-8">
  <ul class="flex gap-8 justify-center">
    {#each filters as { name, id } (id)}
      <FilterItem
        {id}
        activeFilter={filter}>{name}</FilterItem
      >
    {/each}
  </ul>
</section>

<section class="max-w-6xl mx-auto">
  <ul class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
    {#if pageState === 'loading'}
      <p>Loading...</p>
    {:else if pageState === 'ready'}
      {#each currentProducts as product (product.slug)}
        <ProductCard {product} />
      {/each}
    {:else}
      <p>Server not available</p>
    {/if}
  </ul>
</section>
