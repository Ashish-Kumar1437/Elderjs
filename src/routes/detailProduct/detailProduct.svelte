<script>
  export let data;
</script>

<div class="container">
  <img src={data.detail.image} alt="" />
  <h1>{data.detail.title}</h1>
  <p>{data.detail.description}</p>
  <span>Rating {data.detail.rating.rate}</span>
  <span>{data.detail.rating.count}</span>
</div>
