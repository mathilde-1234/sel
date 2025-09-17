async function getSaltPer100g(barcode) {
  const url = `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`;
  const headers = {
    'User-Agent': 'TonAppli/1.0 (ton_email@example.com)'
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    const nutriments = data.product.nutriments;
    const salt100g = nutriments ? nutriments.salt_100g : null;
    const saltUnit = nutriments ? nutriments.salt_unit : 'g';

    if (salt100g === null) {
      console.log('La quantité de sel pour 100 g n\'est pas renseignée.');
    } else {
      console.log(`Sel pour 100 g : ${salt100g} ${saltUnit}`);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
}
// On récupère l'élément input et le bouton
const input = document.getElementById('codebar');
const btn = document.getElementById('btn');

// On ajoute un événement au clic sur le bouton
btn.addEventListener('click', () => {
    // On récupère la valeur de l'input
    const codebar = input.value;
});
// Exemple d'utilisation
getSaltPer100g(codebar); // Remplace par le code-barres souhaité

