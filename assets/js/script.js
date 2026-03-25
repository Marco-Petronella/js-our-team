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
    cardGrid.innerHTML +=`<div class="col-md-4 col-5">
            <div class="card">
                <div class="row">
                    <div class="col-4">
                        <img src="assets/${img}" class="img-fluid" alt="...">
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