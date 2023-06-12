/* eslint-disable linebreak-style */
const navSlide = () => {
  const burger = document.querySelector('.humberger-menu');
  const nav = document.querySelector('.desktop-nav');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

  document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  }));
};

navSlide();

const projectSection = document.querySelector('.cards-section');
let render = '';

const projects = [
  {
    id: 0,
    title: 'RENT A HOUSE',
    projectDescription:
      'RENT A HOUSE is a react application used to rent and buy houses and uses rails api for authentication and data storage.',
    image: 'image/1Pro.jpeg',
    technology: ['React', 'Redux', 'Bootstrap', 'Ruby', 'Rails'],
    liveLink: 'https://renthousefront.onrender.com/',
    sourceLink: 'https://github.com/ZuhRa-HashiMi/RentAnItemApp',
  },
  {
    id: 1,
    title: 'Budget-app',
    projectDescription:
      'Is a mobile web application where you can manage your budget, you have a list of transactions.',
    image: 'image/2Pro.jpeg',
    technology: ['html', 'Bootstrap', 'Ruby', 'Rails'],
    liveLink: 'https://budget-app-k2i1.onrender.com/splashs/index',
    sourceLink: 'https://github.com/ZuhRa-HashiMi/budget_app',
  },
  {
    id: 2,
    title: 'CREATIVE COMMONS',
    projectDescription:
      'The first capstone project at Microverse that I gave the first certificate HTML and CSS from Microverse. ',
    image: 'image/3Pro.jpeg',
    technology: ['html', 'Bootstrap', 'JavaScript'],
    liveLink: 'https://zuhra-hashimi.github.io/Capston_Project/',
    sourceLink: 'https://github.com/ZuhRa-HashiMi/Capston_Project',
  },
  {
    id: 3,
    title: 'Countries COVID-19 Data',
    projectDescription:
      '[COVID-19 Data TRACKER] [COVID-19 Data TRACKER] is a data that shows for each country.',
    image: 'image/4Pro.jpeg',
    technology: ['html', 'Bootstrap', 'React', 'Redux'],
    liveLink: 'https://react-capostone-03b0c2.netlify.app/',
    sourceLink: 'https://github.com/ZuhRa-HashiMi/React_Capstone',
  },
  {
    id: 4,
    title: 'Math-Magicians',
    projectDescription:
      'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) consisting of 3 pages.',
    image: 'image/5Pro.jpeg',
    technology: ['html', 'Bootstrap', 'React'],
    liveLink: 'https://user-images.githubusercontent.com/74463413/212542586-d661a2b4-d83e-4070-9c25-435bf33c5df8.png',
    sourceLink: 'https://github.com/ZuhRa-HashiMi/Math_Magicians',
  },
  {
    id: 5,
    title: 'Roz-Restaurant',
    projectDescription:
      'This project is about building a restaurant web application based on an external API,that provides data about a list of meals.',
    image: 'image/6Pro.jpeg',
    technology: ['html', 'Bootstrap', 'JavaScript'],
    liveLink: 'https://zuhra-hashimi.github.io/JS_Capastone/dist/',
    sourceLink: 'https://github.com/ZuhRa-HashiMi/JS_Capastone',
  },
];

projects.forEach((data) => {
  render += `
    <div class="work-card" style="background-image: url(${data.image})">
      <div class="card-content flex-container">
        <h4 class="title">${data.title}</h4>
        <p>${data.projectDescription}</p>
        <ul>
          ${data.technology.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
      </div>
      <button type="button" class="card-button">See Project</button>
    </div>`;
});

projectSection.innerHTML = render;

/* single Project section modal */

const modalBtn = document.querySelector('.project-button');
const modalBg = document.querySelector('.modal-section');
const modalClose = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modalBg.style.visibility = 'visible';
  modalBg.style.opacity = 1;
});

modalClose.addEventListener('click', () => {
  modalBg.style.visibility = 'hidden';
  modalBg.style.opacity = 0;
});

/* card-modal */

const popupBtns = document.querySelectorAll('.card-button');

const popupObj = projects.reduce((obj, data, i) => {
  obj[`Project${i}`] = {
    title: data.title,
    technologies: data.technology,
    description: data.projectDescription,
    liveLink: data.liveLink,
    sourceLink: data.sourceLink,
  };
  return obj;
}, {});

const popupSection = document.createElement('section');
popupSection.className = 'popup-section';
document.body.appendChild(popupSection);

const modal = document.createElement('div');
modal.className = 'modal';
popupSection.appendChild(modal);

const newCloseImg = document.createElement('img');
newCloseImg.className = 'new-close-img';
newCloseImg.src = 'image/x-icon.png';
newCloseImg.alt = 'Close icon';
modal.appendChild(newCloseImg);

const newTitle = document.createElement('h3');
newTitle.className = 'new-title';
modal.appendChild(newTitle);

const newTechno = document.createElement('div');
newTechno.classList.add('new-techno', 'tags');
modal.appendChild(newTechno);

const modalContainer = document.createElement('div');
modalContainer.className = 'sec-container';
modal.appendChild(modalContainer);

const newProjectImg = document.createElement('img');
newProjectImg.className = 'new-project-img';
newProjectImg.alt = 'project image';
modalContainer.appendChild(newProjectImg);

const newDescription = document.createElement('p');
newDescription.className = 'new-description';
modalContainer.appendChild(newDescription);

const newBtns = document.createElement('div');
newBtns.className = 'new-btns';
modalContainer.appendChild(newBtns);

const createButton = (text, link) => {
  const button = document.createElement('a');
  button.href = link;
  button.className = 'button';
  button.textContent = text;
  button.target = '_blank';
  return button;
};

const openPopup = (index) => {
  const popupData = popupObj[`Project${index}`];
  newTitle.textContent = popupData.title;
  newTechno.innerHTML = popupData.technologies.map((tech) => `<h6>${tech}</h6>`).join('');
  newDescription.textContent = popupData.description;
  newBtns.innerHTML = '';
  newBtns.appendChild(createButton('See Live', popupData.liveLink));
  newBtns.appendChild(createButton('See Source', popupData.sourceLink));

  newProjectImg.src = projects[index].image;

  popupSection.classList.toggle('popup');
  popupSection.classList.toggle('popup-section');
};

popupBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => openPopup(index));
});

const closeBtns = document.querySelectorAll('.new-close-img');
closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => openPopup(0));
});



/* Contact Form Validation */

const emailInpute = document.querySelector('#email');
const submitBtn = document.querySelector('#submit');
const errorMessage = document.querySelector('#error-message');

const error = document.createElement('small');
error.className = 'deactive-error';
error.innerText = 'Email should be in LowerCase';
errorMessage.appendChild(error);

const failed = (event) => {
  event.preventDefault();
  error.classList.add('wrong-email');
  error.classList.remove('deactive-error');
};

const success = () => {
  error.classList.remove('wrong-email');
  error.classList.add('deactive-error');
};

submitBtn.addEventListener('click', (event) => {
  const pattern = /[A-Z]/;
  if (pattern.test(emailInpute.value)) {
    failed(event);
  } else {
    success();
  }
});

// Local Storage

const emailField = document.querySelector('#email');
const nameField = document.querySelector('#fullname');
const textField = document.querySelector('#message');
const storeds = document.querySelectorAll('.stored');
const obj = {};

storeds.forEach((item) => {
  item.addEventListener('input', () => {
    obj.email = emailField.value;

    obj.name = nameField.value;

    obj.textarea = textField.value;

    localStorage.setItem('form', JSON.stringify(obj));
  });
});

const data = JSON.parse(localStorage.getItem('form'));

window.onload = () => {
  if (data.name !== undefined) {
    nameField.value = data.name;
  }
  if (data.email !== undefined) {
    emailField.value = data.email;
  }
  if (data.textarea !== undefined) {
    textField.value = data.textarea;
  }
};