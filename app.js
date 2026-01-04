function calculateCost() {

    let numberOfGuests = parseFloat(document.getElementById("numberOfGuests").value);
    let costPerGuests = parseFloat(document.getElementById("costPerGuests").value);
    let serviceFees = parseFloat(document.getElementById("serviceFees").value);

    let totalCost = (numberOfGuests * costPerGuests) + serviceFees;

    let result = document.getElementById("result");
    result.textContent = `The total cost of the event is $${totalCost}`;

}