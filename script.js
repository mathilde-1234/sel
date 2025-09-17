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

// Exemple d'utilisation
getSaltPer100g('3017624010701'); // Remplace par le code-barres souhaité
