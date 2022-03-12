'use strict';

const navbar = document.querySelector('.navbar');

const title = document.querySelector('.title');
const aboutBtn = document.querySelector('.about__btn');
const projectBtn = document.querySelector('.project__btn');
const contactBtn = document.querySelector('.contact__btn');

const modal = document.createElement('div');

modal.classList.add('modal-window');
modal.innerHTML = `<img src="image/MyProfile.jpeg" alt="my picture"/><p>Visiter!! Hi welcome to my page. <br>
    I'm Abdullah Alhattami a Software Engineering,<br>
    oh let me tell you about my mind<br>I really like Desgin and front end<br> developming because it's amazing,
     Right 😎😎</p>`;
navbar.after(modal);

title.addEventListener('click', function () {
  create();
  modal.innerHTML = `<img src="image/MyProfile.jpeg" alt="my picture"/><p>Visiter!! Hi welcome to my page. <br>
  I'm Abdullah Alhattami a Software Engineering,<br>
  oh let me tell you about my mind<br>I really like Desgin and front end<br> developming because it's amazing,
   Right 😎😎</p>`;
});

aboutBtn.addEventListener('click', function () {
  create();
  modal.innerHTML = `<ul>
  <li class="card"><img class="img_card" src="image/iam.png"/> <p>Who I am? <br>
  My Name is Abdullah A Alhattami From Yemen, I'm student of computer scince software engineering at Multimedia university in Malaysia</li>
  
  <li class="card"><img class="img_card" src="image/Programming-Languages.jpg"/> <p>What are my skills?<br>
  I can speak two languge Arabic and English, also I'm web delevoper more into Front-End because I like see what I make✌️.</li>
  
  <li class="card"><img class="img_card" src="image/hobby.jpg"/> <p>What are my hobbies? <br>
  I like Read book 📚, play football ⚽, listen music 🎶and computer games 🎮,I am a social person so I like spend time with my friends 🧑🏻‍🤝‍🧑🏻</li>

  </ul>`;

  navbar.after(modal);
});

projectBtn.addEventListener('click', function () {
  create();

  modal.innerHTML = `
  <div class="container">

    <div class="project__card">
      <img class="project__img" src="image/FoodDeliver.png"> 
      <h4>Food Delivery Order</h4>    
      <a href="https://github.com/Flame1733/Food-Delivery-Assigment-">
      <button>More Details</button></a>
    </div>

    <div class="project__card">
      <img class="project__img" src="image/inter_che.png"> 
      <h4>International Checkers</h4>     
      <a href="https://github.com/Flame1733/-International-Checkers-Assignment-First-Project">
      <button>More Details</button></a>
    </div>

    <div class="project__card">
      <img class="project__img" src="image/HangAlien.png"> 
      <h4>Hang<br>Alien</h4>     
      <a href="https://github.com/Flame1733/Hang-Alien-">
      <button>More Details</button></a>
    </div>

    <div class="project__card">
      <img class="project__img" src="image/Github.png"> 
      <h4>More<br>projects</h4>     
      <a href="https://github.com/Flame1733/Hang-Alien-">
      <button>My GitHub</button></a>
    </div>
 
  </div>
  `;
});

contactBtn.addEventListener('click', function () {
  create();
  modal.innerHTML = `<button class="media"><h5>📞<br>+60139361922</h5></button></a>
  <button class="media"><h5>📧<br>Alhattami@outlook.com</h5></button> `;
});

const clear = function () {
  modal.innerHTML = '';
  modal.remove();
};

const create = function () {
  clear();
  modal.classList.add('modal-window');
  navbar.after(modal);
};
