<script lang="ts">
  import { getLocaleDateString } from '$lib/getLocaleDateString.js';

  const { data } = $props();
</script>

<svelte:head>
  <title>タグ: {data.tag} - The-Bloooog</title>
</svelte:head>

<h1>タグ: "{data.tag}"</h1>

{#each Object.entries(data.posts) as [year, posts] }
  <h3 class="year">{year}</h3>

  <ul>
    {#each posts as post}
      <li>
        <a href="/blog/{post.slug}" class="post-link">
          <span class="post-date">{getLocaleDateString(post.date)}</span>
          <span class="post-title">{post.title}</span>
        </a>

        {#if post.tags.length > 0}
          <span class="tags">
            {#each post.tags as tag}
            <a href="/blog/tag/{tag}" class="tag">{tag}</a>
            {/each}
          </span>
        {/if}
      </li>
    {/each}
  </ul>
{/each}

<style lang="scss">
  .year {
    color: #555;
  }

  ul {
    font-size: 1.1rem;
    line-height: 1.1;
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;

    li {
      margin-bottom: 1.4rem;

      .post-link {
        border-radius: 10px;
        color: #333;
        padding: 0.5rem;

        &:hover {
          background-color: #e9e9e9;
        }

        .post-date {
          margin-right: 1rem;
          color: #555;
          font-size: 0.9rem;
        }
      }

      .tags {
        margin-left: 1rem;
        margin-top: 0.9rem;
      }
    }
  }
</style>
