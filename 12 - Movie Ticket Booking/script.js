const seatArrangement = document.querySelector('.seat__arrangement');
const seatCount = document.querySelector('.seat__count');
const totalCost = document.querySelector('.total__cost');
const select = document.querySelector('select');
const allRows = document.querySelectorAll('.row');
let seatCost;
let count;

// adding IDs to rows and seats
    allRows.forEach((row,index) => {
        row.setAttribute('id',index);
        const allSeatInRow = row.children;
        Array.from(allSeatInRow).forEach((seat,index) => {
            seat.setAttribute('id',index);
        })
    });



// Updates Booking Details
const updateBookingDetails = () => {
    let seatsSelected = document.querySelectorAll('div.row .seat-selected');
    count = seatsSelected.length;
    seatCount.innerText = count;
    totalCost.innerText = count * seatCost;
}

// Get seats selected
const getSeatsSelected = () => {
    let seatLocationList = [];
    let seatsSelected =  document.querySelectorAll('div.row .seat-selected');
    seatsSelected.forEach(seat => {
        const seatNum = seat.getAttribute('id');
        const rowNum = seat.parentElement.getAttribute('id');
        seatLocationList.push([rowNum,seatNum])
    })  
    return seatLocationList;
}

// Updating Local Storage
const updateLocalStorage = () => {

    const bookingInfo = {
        selectedIndex: select.options.selectedIndex,
        seatsSelected : getSeatsSelected(),
    }
    
    for(let property in bookingInfo){
        localStorage.setItem(property,JSON.stringify(bookingInfo[property]))
    }
}

// Load contents from local storage to UI
const updateUI = () => {
    select.options.selectedIndex = +(JSON.parse(localStorage.getItem('selectedIndex')));
    const seatsSelectedAlready = JSON.parse(localStorage.getItem('seatsSelected'));
    allRows.forEach((row,index) => {
        seatsSelectedAlready.forEach(seatSelectedAlready => {
            if(index === +seatSelectedAlready[0]){
                const allSeatInRow = row.children;
                Array.from(allSeatInRow).forEach((seat,i) => {
                    if(i === +seatSelectedAlready[1])
                        seat.classList.add('seat-selected');
                })
            }
        })
    });
}

// Event Listner
// Selects or unselects a seat in seat arrangement
// Counts the seats selected
seatArrangement.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('seat-taken') && !e.target.classList.contains('seat-infoStyle')){
        e.target.classList.toggle('seat-selected');
        updateBookingDetails();
    }
    // Updating Local Storage
    updateLocalStorage();
});

// Sets the seat cost on change of movie select options
select.addEventListener('change', () => {
    seatCost = document.querySelector('select').value;
    updateBookingDetails();
    updateLocalStorage();
});

// Load contents from the Local Storage
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    seatCost = select.options[select.selectedIndex].value;
    updateBookingDetails();
});


