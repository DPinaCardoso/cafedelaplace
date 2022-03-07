let titreProduit = document.querySelector("#titreProduit");
let produit = document.querySelector(".produit")
let detailProduit = document.querySelector("#remplir");
let produittab = [];
let buttonQuery = document.querySelector(".buttonSupprimé");
 



if (JSON.parse(localStorage.getItem("@produit")) == "") {
  produittab = [];
  console.log("y en a pas");
} else {
  produittab = JSON.parse(localStorage.getItem("@produit"));
  console.log("y en a");
  let nom = localStorage.getItem("nom");
  let paht = localStorage.getItem("paht");
  let PrixTTC = localStorage.getItem("PrixTTC");
  let content = "";
  let title = "";

  content += `
            <p> Prix d'achat HT: ${paht}
            <p> Prix de vente TTC: ${PrixTTC}
    
        </p><button class="deleteButton">Supprimer </button>`;
  title += `
    <p> Nom du produit ${nom}`;
    detailProduit.innerHTML = content;
     titreProduit.innerHTML = title;
}

function effacer() {
 
    buttonQuery.addEventListener ("click", function() {
      produit.remove()

    } 
     )}

     effacer()