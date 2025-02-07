// for the product array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  // to populate product name select
  window.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-name');
  
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  
    if (window.location.pathname.includes('review.html')) {
      let reviewCount = localStorage.getItem('reviewCount') || 0;
      reviewCount++;
      localStorage.setItem('reviewCount', reviewCount);
  
      const counterDisplay = document.createElement('p');
      counterDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
      document.body.appendChild(counterDisplay);
    }
  });
const lastMod = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastMod;
