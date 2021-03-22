const seatArrangement = document.querySelector('.seat__arrangement');
const seatCount = document.querySelector('.seat__count');
const totalCost = document.querySelector('.total__cost');
const select = document.querySelector('select');
let seatCost = select.value;
let count;

// Updates Booking Details
const updateBookingDetails = () => {
    let seatsSelected = document.querySelectorAll('div.row .seat-selected');
    count = seatsSelected.length;
    seatCount.innerText = count;
    totalCost.innerText = count * seatCost;
}

// Event Listner
// Selects or unselects a seat in seat arrangement
// Counts the seats selected
seatArrangement.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('seat-taken') && !e.target.classList.contains('seat-infoStyle')){
        e.target.classList.toggle('seat-selected');
        updateBookingDetails();
    }
});

// Sets the seat cost on change of movie select options
select.addEventListener('change', () => {
    seatCost = document.querySelector('select').value;
    updateBookingDetails();
});



