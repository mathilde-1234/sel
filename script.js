let donneesCSV = []; // Cette variable contiendra toutes les données du fichier

window.addEventListener("DOMContentLoaded", () => {
  fetch("stats.csv")
    .then(response => response.text())
    .then(data => {
      const lignes = data.trim().split("\n");

      lignes.forEach(ligne => {
        const cellules = ligne.split(",");
        donneesCSV.push(cellules.map(cellule => cellule.trim()));
      });

      
      console.log("Données importées depuis stats.csv :", donneesCSV);
    })
    .catch(error => {
      console.error("Erreur lors du chargement de stats.csv :", error);
    });
});
