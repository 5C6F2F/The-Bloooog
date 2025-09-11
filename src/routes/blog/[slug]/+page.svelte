<script lang="ts">
    import { getLocaleDateString } from '$lib/getLocaleDateString.js';

  const { data } = $props();
  const { post } = data;
</script>

<svelte:head>
  <title>{post.title} - The-Bloooog</title>
</svelte:head>

<article>
  <header class="post-header">
    <h1>{post.title}</h1>

    <div class="metadata">
      <span>公開日: {getLocaleDateString(post.date)}</span>
      {#if post.updateDate}
        <span class="updateDate">更新日: {getLocaleDateString(post.updateDate)}</span>
      {/if}

      {#if post.tags.length > 0}
      <div class="tags">
        {#each post.tags as tag}
          <a href="/blog/tag/{tag}" class="tag">{tag}</a>
        {/each}
      </div>
      {/if}
    </div>
  </header>

  <div class="post-content">
    {@html post.content}
  </div>
</article>

<style lang="scss">
  .post-header {
    padding-bottom: 1rem;

    .metadata {
      color: #666;
      margin-top: 0.5rem;

      .updateDate {
        margin-left: 1rem;
      }

      .tags {
        margin-top: 0.5rem;
      }
    }
  }
</style>
