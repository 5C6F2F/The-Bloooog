<script lang="ts">
  import { getLocaleDateString } from '$lib/getLocaleDateString.js';

  const { data } = $props();
</script>

<svelte:head>
  <title>ブログ記事一覧 - The-Bloooog</title>
</svelte:head>

<h1>このブログについて</h1>
<p>このブログでは、日々のプログラミング学習や技術的な発見を記録しています。</p>
<p>不備などありましたら教えてくださると幸いです。</p>

<h2>ブログ記事一覧</h2>

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
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;

    li {
      margin-bottom: 1rem;

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
