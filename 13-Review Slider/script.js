const people = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'susan andersen',
    title: 'the boss',
    quote:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
];

let currentItem = 0;

const img = document.querySelector('.image__container img');
const reviewerName = document.querySelector('.reviewer__name');
const title = document.querySelector('.reviewer__title');
const quote = document.querySelector('.reviewer__quote');
const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');

const showPerson = (item) => {
  const person = people[item];
  
  img.src = person.image;
  img.classList.add('animate__animated', 'animate__fadeIn');
  reviewerName.textContent = person.name;
  reviewerName.classList.add('animate__animated', 'animate__fadeIn');
  title.textContent = person.title;
  title.classList.add('animate__animated', 'animate__fadeIn');
  quote.textContent = person.quote;
  quote.classList.add('animate__animated', 'animate__fadeIn');
}

showPerson(currentItem);

prevBtn.addEventListener('click', () => {
  currentItem--;
  if(currentItem < 0){
    currentItem = people.length - 1;
  }
  showPerson(currentItem);  
});

nextBtn.addEventListener('click', () => {
  currentItem++;
  if(currentItem > people.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

img.addEventListener('animationend', () => {
  img.classList.remove('animate__animated', 'animate__fadeIn');
});

quote.addEventListener('animationend', () => {
  quote.classList.remove('animate__animated', 'animate__fadeIn');
});

title.addEventListener('animationend', () => {
  title.classList.remove('animate__animated', 'animate__fadeIn');
});

reviewerName.addEventListener('animationend', () => {
  reviewerName.classList.remove('animate__animated', 'animate__fadeIn');
});
