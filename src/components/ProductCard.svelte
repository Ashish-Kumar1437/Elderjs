<script>
  export let data, link;
</script>

<style>
  .container {
    width: 20vw;
    display: flex;
    background-color: aqua;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 50%;
    height: auto;
  }
</style>

<a href={link} class="container">
  <img src={data.image} alt="img" />
  <span class="title">{data.title}</span>
  <div class="tag">
    <span class="tag price">${data.price}</span>
    <span class="tag rating">{data.rating.rate}</span>
    <span class="tag count">{data.rating.count}</span>
  </div>
</a>
