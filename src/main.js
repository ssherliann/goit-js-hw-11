import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.querySelector('.input-search');
const form = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader'); 
const key = '42111796-9c286351ad531542ab3bfb8be';

loader.style.display = 'none';

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    loader.style.display = 'block';

    searchImages(input.value);

    function searchImages(q) {
        const requestUrl = `https://pixabay.com/api/?key=${key}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`;

        fetch(requestUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            loader.style.display = 'none';

            if (data && data.hits && data.hits.length > 0) {
                const markup = data.hits.map(data => {
                    return `<li class="gallery-item"><a href="${data.webformatURL}">
                    <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>
                    <p>Likes: ${data.likes}</p>
                    <p>Views: ${data.views}</p>
                    <p>Comments: ${data.comments}</p>
                    <p>Downloads: ${data.downloads}</p>
                    </li>`;
                })
                .join('');
                gallery.insertAdjacentHTML('afterbegin', markup);

                const lightbox = new SimpleLightbox('.gallery a', {
                captions: true,
                captionSelector: 'img',
                captionsData: 'alt',
                captionPosition: 'bottom',
                animation: 250,
                });

                lightbox.on('show.simplelightbox');
                lightbox.refresh();
                form.reset();
            } else {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    class: 'izi-toast',
                    messageColor: '#fafafb',
                    messageSize: '16px',
                    backgroundColor: '#ef4040',
                    maxWidth: '432px',
                    position: 'topRight', 
                });
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
    }
});
