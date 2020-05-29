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
 * Changes picture and caption of img.
 */
function changePicture() {
  const pictureContainer = document.getElementById('pet-container');
  const captionContainer = document.getElementById('pet-caption');
  const petPictures =
      ['/images/IMG_7208.JPG', '/images/IMG_7209.JPG'];

  // Make sure you don't get the same picture twice in a row.
  if((pictureContainer.src).charAt(65)==9){
      pictureContainer.src = petPictures[0];
      captionContainer.innerText = "Here's my dog";
  }
  else{
      pictureContainer.src = petPictures[1];
      captionContainer.innerText = "Here's my cat";
  }
}