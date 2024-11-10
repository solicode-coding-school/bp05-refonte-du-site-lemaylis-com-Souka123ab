// let voiture ={
//     color:"black",
    
//     marque:"clio",
//     anne : 2022
// }
// voiture.modele ="clio 5";
// console.log(voiture)
// for(let m in voiture){
// console.log(m)
// // console.log(voiture)
// }
// let voiture2={
// }
// function isEmpty(obj){
//     let copteur=0
// for(let m in obj){
//     copteur++
//     return true;
// }
// return false;

// }
// console.log(isEmpty(voiture))
// console.log(isEmpty(voiture2))
function showReservationDetails() {
    const roomType = document.getElementById('rooms').value;
    const checkinDate = new Date(document.getElementById('checkin').value);
    const checkoutDate = new Date(document.getElementById('checkout').value);
  
    // Calculate the number of nights, handling potential errors
    const oneDay = 24 * 60 * 60 * 1000;
    let diffDays = Math.round(Math.abs((checkoutDate - checkinDate) / oneDay));
    if (isNaN(diffDays) || diffDays < 1) {
      alert('Veuillez sélectionner des dates valides.');
      return;
    }
  
    // Calculate the total price based on room type and nights
    let totalPrice = 0;
    switch (roomType) {
      case 'single':
        totalPrice = 500 + (diffDays - 1) * 250;
        break;
      case 'double':
        totalPrice = 800 + (diffDays - 1) * 400;
        break;
      case 'suite':
        totalPrice = 1200 * diffDays;
        break;
      default:
        alert('Type de chambre invalide.');
        return;
    }
  
    // Display the reservation details in the popup
    document.getElementById('roomType').textContent = `Type de chambre : ${roomType}`;
    document.getElementById('nights').textContent = `Nombre de nuits : ${diffDays}`;
    document.getElementById('totalPrice').textContent = `Prix total : ${totalPrice} MAD`;
  
    // Show the popup
    document.getElementById('reservationPopup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('reservationPopup').style.display = 'none';
  }