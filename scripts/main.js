/* variables in all caps are variables with values that shouldnt change. No constants in javascript ES5,but there are in ES6 */
/* the following constant variables target DOM elements like the detail image, detail title, and thumbnail items */
var DETAIL_IMAGE_SELECTOR = '[data-image-role=\"target\"]'; // data attribute selector for detail image
var DETAIL_TITLE_SELECTOR = '[data-image-role=\"title\"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role=\"trigger\"]';

function setDetails(imageUrl, titleText) {
    'use strict'; // this tells browser that the function conforms to most recent standard version of javascript
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);

    detailImage.setAttribute('src', imageUrl);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb); // must be declared inside event listener so it ONLY happens when clicked
    });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnailsNodeList = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR)
  /* methods that return lists of elements like querySelectorAll return NodeList,
  not an array!!! The following code will convert a NodeList to an Array */
  var thumbnailArray = [].slice.call(thumbnailsNodeList);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
