//your JS code here. If required.
const animals = ['camel', 'cheetah', 'elephant', 'gorilla', 'koala', 'lion', 'polar_bear', 'tiger', 'wolf'];

function renderPhotos() {
  const container = document.getElementById('photo-container');

  animals.forEach(animal => {
    const image = document.createElement('img');
    image.src = `https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/${animal}.jpg`;
    image.alt = `${animal} photo`;

    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');
    photoDiv.appendChild(image);

    container.appendChild(photoDiv);
  });
}

// Call the function to render the photos
renderPhotos();
