// функції для відображення елементів інтерфейсу.

export function createMarkup(arr) {
  return arr
    .map(
      ({
        likes,
        views,
        comments,
        downloads,
        previewURL,
        tags,
        id,
      }) => `<li data-id="${id}">
      <img src="${previewURL}" alt="${tags}" class="preview-image" width="360" height="152">
      <div class="info-container">
      <div class="info-box">
        <span class="label">Likes</span>
        <span class="data-label">${likes}</span>
        </div>
        <div class="info-box">
        <span class="label">Views</span>
        <span class="data-label">${views}</span>
        </div>
        <div class="info-box">
        <span class="label">Comments</span>
        <span class="data-label">${comments}</span>
        </div>
        <div class="info-box">
        <span class="label">Downloads</span>
        <span class="data-label">${downloads}</span>
        </div>
      </div>
  </li>`
    )
    .join('');
}
