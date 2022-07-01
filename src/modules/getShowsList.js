const show = document.querySelector('.main-container');
let template = '';

const fetchData = async () => {
  const data = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const result = await data.json();
  // eslint-disable-next-line array-callback-return
  result.map((res, index) => {
    template += `
  <li id="${res.show.id}" class="col-sm mt-3">
   <div class="card" style="width: 18rem;">
    <img src="${res.show.image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
     <div class="space">
      <h5 class="card-title">${res.show.name}</h5>
      <i data-id=${index} class="heart fa fa-heart" aria-hidden="true"></i>
     </div>
      <span  class="likes">Likes</span>
      <div class="btn-container">
        <a href="#" class="btn btn-1 comments">Comments</a>
      </div>
    </div>
</div>
</li>
        `;
    show.innerHTML = template;
  });
};

export default fetchData;
