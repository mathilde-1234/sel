  fetch("stats.csv")
      .then(response => response.text())
      .then(data => {
        const lignes = data.trim().split("\n");
        const table = document.getElementById("csvTable");

        lignes.forEach(ligne => {
          const row = table.insertRow();
          const cellules = ligne.split(","); // ou ";" selon le fichier

          cellules.forEach(cellule => {
            const cell = row.insertCell();
            cell.textContent = cellule.trim();
          });
        });
      })
      .catch(error => {
        console.error("Erreur lors du chargement du fichier CSV :", error);
      });
