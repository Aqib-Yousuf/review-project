const review = [
    {
        id: 1,
        name: "Elon Musk",
        job: "CEO TWITTER",
        image: "images/download (1).jpg",
        text: "He is a scientist and founder of twitter"
    },
    {
        id: 2,
        name: "Annie Kubow",
        job: "DEVELOPER",
        image: "images/annikubow.jpg",
        text: "She is a developer"
    },
    {
        id:3,
        name:"Baber Azam",
        job:"CRICKTER",
        image:"images/download.jpg",
        text:"He is a cricketer"

    },{
        id:4,
        name:"Harry potter",
        job:"ACTOR",
        image:"images/harrypotter.jpeg",
        text:"Well known actor"
    }
]

var currentItem = 0;

const image = document.getElementById("person-image")
const author = document.getElementById("author")
const jobs = document.getElementById("jobs")
const info = document.getElementById("info")

const previousButton = document.querySelector(".prev-btn")
const nextButton = document.querySelector(".next-btn")
const randomButton = document.querySelector(".random-btn")

window.addEventListener("DOC", function(){
    showPerson();
})

function showPerson(){
    const item = review[currentItem];
    image.src=item.image;
    author.textContent=item.name;
    jobs.textContent=item.job;
    info.textContent=item.text;

}
nextButton.addEventListener('click', function(){
  currentItem ++
  if (currentItem > review.length-1){
    currentItem=0
  };
    
  showPerson();
})

previousButton.addEventListener('click', function(){
    currentItem --
    if (currentItem < review.length-1){
        currentItem=0
    };
    
    showPerson();
  })

randomButton.addEventListener('click',function(){
    currentItem=Math.floor(Math.random() * review.length)
    showPerson();
})