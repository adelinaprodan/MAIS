function fillHearts(rating) {
    for (let i = 1; i <= 5; i++) {
        const heart = document.getElementById(`heart-${i}`);
        if (heart) {
            if (i <= rating) {
                heart.classList.add('heart_full');
            } else {
                heart.classList.remove('heart_full');
            }
        }
    }
}

function rateArticle(rating) {
    fillHearts(rating);

    localStorage.setItem('articleRating', rating);
}


document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
    var searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', function() {
        filterElements();
    });

    searchInput.addEventListener('input', function() {
        filterElements();
    });

    function filterElements() {
        var searchText = searchInput.value.toLowerCase();

        var gridItems = document.querySelectorAll('.grid-item');

        gridItems.forEach(function(item) {
            var itemText = item.querySelector('h5').textContent.toLowerCase();

            if (itemText.includes(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
         var articleSection = document.querySelector('.article');
         var imageAboveNav = document.querySelector('img');

         if (searchText.trim() !== '') {
             articleSection.style.display = 'none';
             imageAboveNav.style.display = 'none';
         } else {
             articleSection.style.display = 'block';
             imageAboveNav.style.display = 'block';
         }
    }
});

var scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function() {
    var threshold = 150;
     var scrolledToBottom = window.scrollY + window.innerHeight + threshold >= document.documentElement.scrollHeight;

     scrollToTopButton.style.display = scrolledToBottom ? 'block' : 'none';
});

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
