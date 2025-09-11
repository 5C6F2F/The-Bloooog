<script lang="ts">
  import "$css/global.scss";
  import atcoderIcon from "$lib/assets/atcoder-icon.png";
  import favicon from "$lib/assets/favicon.png";
  import githubIcon from "$lib/assets/github-icon.svg";
  import qiitaIcon from "$lib/assets/qiita-icon.png";
  import twitterIcon from "$lib/assets/twitter-icon.svg";

  const { children } = $props();

  const year = new Date().getFullYear();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
  <header>
    <p class="blog-title">
      <a href="/"><img src="{favicon}" alt="A man reading a book"/>The-Bloooog</a>
    </p>
    <nav>
      <a href="/">home</a>
      <a href="/blog">blog</a>
    </nav>
  </header>

  <main>
    {@render children?.()}
  </main>

  <footer>
    <div class="social-links">
      <ul>
        <li>
          <a href="https://github.com/5C6F2F" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://x.com/__5C6F2F__" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://qiita.com/5C6F2F" target="_blank" rel="noopener noreferrer" aria-label="Qiita">
            <img src={qiitaIcon} alt="Qiita" />
          </a>
        </li>
        <li>
          <a href="https://atcoder.jp/users/The_Bouningeeeen" target="_blank" rel="noopener noreferrer" aria-label="AtCoder">
            <img src={atcoderIcon} alt="AtCoder" />
          </a>
        </li>
      </ul>
    </div>
    <p>&copy; {year} The-Bloooog</p>
  </footer>
</div>

<style lang="scss">
  .container {
          max-width: 800px;
          margin: 0 auto;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 1px solid #ccc;
      margin-bottom: 2rem;

      .blog-title {
        font-size: 2rem;
        font-weight: bold;
        margin: 10px 0;

        img {
          transform: translateY(0.7rem);
          height: 3rem;
          width: 3rem;
          margin-right: 0.7rem;
        }
      }

      p a {
        color: #333;
        text-decoration: none;
      }

      nav {
        display: flex;
        gap: 1.5rem;

        a {
          text-decoration: none;
          color: #555;
          font-weight: bold;

          &:hover {
            color: #007bff;
          }
        }
      }
    }
  }

  main {
    min-height: 50vh;
    padding: 0 min(10px, 2%);
  }

  footer {
    text-align: center;
    margin-top: 4rem;
    padding: 2rem 0;
    border-top: 1px solid #ddd;
    color: #888;

    .social-links {
      ul {
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        padding-left: 0;

        li {
          list-style: none;
          margin: 0 10px;

          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
</style>
