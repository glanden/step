

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Fetches message from the server and adds it to the DOM with translation.
 */
function getData() {
  console.log('Fetching data.');
  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = 
    fetch('/list-comments?language='+document.getElementById('language').value)
    .then(response => response.json())
    .then((comments) => { 
  const commentsListElement = document.getElementById('server-comments-container');
  commentsListElement.innerHTML = '';
  for(let i = 0; i<comments.length; i++){
    commentsListElement.appendChild(
    createListElement(comments[i]));
    commentsListElement.appendChild(
    createListElement(comments[i]));
  }
  });
}
/** Creates a list element that displays comment. */
function createListElement(comment) {
  const liElement = document.createElement('li');
  liElement.innerText = comment;
  return liElement;
}
/** Adds a quote to the DOM. */
function addQuoteToDom(quote) {
  console.log('Adding quote to dom: ' + quote);

  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}

/**
 * Changes picture and caption of img.
 */
function changePicture() {
  const pictureContainer = document.getElementById('pet-container');
  const captionContainer = document.getElementById('pet-caption');
  const petPictures =
      ['/images/IMG_7208.JPG', '/images/IMG_7209.JPG'];

  const id_index = 57;
  const img_1_id = 9;
  // Make sure you don't get the same picture twice in a row.
  console.log(pictureContainer.src);
  if((pictureContainer.src).charAt(id_index)==img_1_id){
      pictureContainer.src = petPictures[0];
      captionContainer.innerText = "Here's my dog";
  }
  else{
      pictureContainer.src = petPictures[1];
      captionContainer.innerText = "Here's my cat";
  }
}
