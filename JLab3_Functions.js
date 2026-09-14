let orders = [
    {id: 1, CName: "Miran", PName: "Laptop", Qty: 2, Price: 200000, Status: "Pending"},
    {id: 2, CName: "Arfiyah", PName: "Mobile", Qty: 3, Price: 300000, Status: "Shipped"},
    {id: 3, CName: "Wali", PName: "Smart Watch", Qty: 1, Price: 100000, Status: "Delivered"}
];
// 1.
function calculateOrderTotal(order) {
    let total = order.Qty * order.Price;
    return total;
}

for (let i = 0; i < orders.length; i++) {
    console.log("Order " + orders[i].id + " Total = Rs. " +calculateOrderTotal(orders[i]));
}
// 2. 
function findCustomerSpending(customerName) {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].CName == customerName) {
            total = total + calculateOrderTotal(orders[i]);
        }
    }
    return total;
}
console.log("Miran spent = Rs. " + findCustomerSpending("Miran"));
// 3. 
function filterOrders(status) {
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].Status == status) {
            console.log(orders[i]);
        }
    }
}
filterOrders("Pending");
// 4. 
function findBestSellingProduct() {

    let highestQuantity = orders[0].Qty;
    let bestProduct = orders[0].PName;

    for (let i = 1; i < orders.length; i++) {

        if (orders[i].Qty > highestQuantity) {
            highestQuantity = orders[i].Qty;
            bestProduct = orders[i].PName;
        }
    }

    return bestProduct;
}

console.log("Best Selling Product = " + findBestSellingProduct());


// 5. 
function applyDiscount(order) {
    let total = calculateOrderTotal(order);
    if (total > 10000) {
        total = total - (total * 0.10);
    }
    return total;
}
console.log("Final Amount = Rs. " +applyDiscount(orders[0]));

// 6.
function findHighestOrder() {
    let highestAmount = 0;
    let customerName = "";
    for (let i = 0; i < orders.length; i++) {
        let finalAmount = applyDiscount(orders[i]);
        if (finalAmount > highestAmount) {
            highestAmount = finalAmount;
            customerName = orders[i].CName;
        }
    }
    return customerName;
}
console.log("Highest Order Customer = " + findHighestOrder());
// 7.
function displaySummary() {

    for (let i = 0; i < orders.length; i++) {

        let originalTotal = calculateOrderTotal(orders[i]);
        let finalAmount = applyDiscount(orders[i]);
        let discount = originalTotal - finalAmount;

        console.log("Customer: " + orders[i].CName);
        console.log("Product: " + orders[i].PName);
        console.log("Original Total: Rs. " + originalTotal);
        console.log("Discount: Rs. " + discount);
        console.log("Final Amount: Rs. " + finalAmount);
        console.log("--------------------------");
    }
}
displaySummary();