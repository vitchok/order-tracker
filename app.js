// Load orders from local storage on page load
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let acceptedCount = 0;
let declinedCount = 0;

function addOrder(decision) {
    if (orders.length === 100) {
        const removed = orders.shift();
        if (removed === 'accepted') acceptedCount--;
        if (removed === 'declined') declinedCount--;
    }
    orders.push(decision);
    if (decision === 'accepted') acceptedCount++;
    if (decision === 'declined') declinedCount++;
    updateStats();
    updateSquares();
    saveOrdersToLocalStorage(); // Save orders to local storage after each update
}

function updateStats() {
    document.getElementById('acceptedCount').textContent = acceptedCount;
    document.getElementById('declinedCount').textContent = declinedCount;
    const acceptanceRate = (acceptedCount / orders.length * 100).toFixed(2);
    document.getElementById('acceptanceRate').textContent = isNaN(acceptanceRate) ? '0.00%' : `${acceptanceRate}%`;
}

function updateSquares() {
    const squaresContainer = document.getElementById('squaresContainer');
    squaresContainer.innerHTML = ''; // Clear the container

    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if (orders[i] === 'accepted') {
            square.classList.add('accepted');
        } else if (orders[i] === 'declined') {
            square.classList.add('declined');
        }
        squaresContainer.appendChild(square);
    }
}

function saveOrdersToLocalStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Initialize the squares container with empty squares
document.addEventListener('DOMContentLoaded', () => {
    updateSquares();
});let orders = [];
let acceptedCount = 0;
let declinedCount = 0;

function addOrder(decision) {
    if (orders.length === 100) {
        const removed = orders.shift();
        if (removed === 'accepted') acceptedCount--;
        if (removed === 'declined') declinedCount--;
    }
    orders.push(decision);
    if (decision === 'accepted') acceptedCount++;
    if (decision === 'declined') declinedCount++;
    updateStats();
    updateSquares();
}

function updateStats() {
    document.getElementById('acceptedCount').textContent = acceptedCount;
    document.getElementById('declinedCount').textContent = declinedCount;
    const acceptanceRate = (acceptedCount / orders.length * 100).toFixed(2);
    document.getElementById('acceptanceRate').textContent = isNaN(acceptanceRate) ? '0.00%' : `${acceptanceRate}%`;
}

function updateSquares() {
    const squaresContainer = document.getElementById('squaresContainer');
    squaresContainer.innerHTML = ''; // Clear the container

    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if (orders[i] === 'accepted') {
            square.classList.add('accepted');
        } else if (orders[i] === 'declined') {
            square.classList.add('declined');
        }
        squaresContainer.appendChild(square);
    }
}

// Initialize the squares container with empty squares
document.addEventListener('DOMContentLoaded', () => {
    updateSquares();
});
