const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/*
Dato un array di oggetti rappresentante un team di un’azienda, 
creare una pagina dedicata  in cui mostrare una card per ciascun 
componente.
*/
const cardGrid = document.getElementById("card-grid");


populateGrid(cardGrid, teamMembers) 

function populateGrid(cardGrid, teamMembers) {
  cardGrid.innerHTML = "";
  for (let i=0; i<teamMembers.length; i++) {
  const {name, role, email, img} = teamMembers[i];
  addCard(name, role, email, img, cardGrid);
  }
}

function addCard(name, role, email, img, cardGrid) {
    cardGrid.innerHTML +=`<div class="col-md-4 col-6">
            <div class="card">
                <div class="row">
                    <div class="col-4">
                        <img src="assets/${img}" class="img-fluid card-img" alt="...">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <p class="card-title">${name}</p>
                            <p class="card-role">${role}</p>
                            <p class="card-email">${email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `
}

/*
Aggiungere un form di aggiunta membri che permetta
 di visualizzare il nuovo membro sulla pagina
*/
const formAddUser = document.querySelector("form");
const formName = document.getElementById("form-name");
const formRole = document.getElementById("form-role");
const formEmail = document.getElementById("form-email");
const formImg = document.getElementById("form-img");

formAddUser.addEventListener('submit', function (e) {
e.preventDefault();
 addCardFromForm(formName, formEmail, formImg, formRole);
} )
function addCardFromForm(formName, formEmail, formImg, formRole) {
  const name = formName.value;
  const email = formEmail.value;
  const role = formRole.value;
  const img = formImg.value;
  addUser(name, email, role, img);
  populateGrid(cardGrid, teamMembers);
}

function addUser(name, email, role, img) {
   teamMembers.push(
    {
      name,
      email,
      role,
      img
    }
   )
}