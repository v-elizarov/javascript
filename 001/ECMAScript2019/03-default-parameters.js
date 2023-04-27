// Functions
// (Default Parameters)
// @font Fira Code, with ligature support


function fetchOrders(count, start = 0) {
    // Old method:
    // if (count === undefined) {
    //     count = 10;
    // }

    // if (start === undefined) {
    //     start = 0;
    // }

    console.log('Getting', count, 'orders starting from', start);
}

// init default args
fetchOrders();
// JavaScript assigns a value left to right
// default parameters place in the end of args
// !null = as a value
// !undefined = will replace by value as default
fetchOrders(22);

// Object as default value
function getProduct(opts = {minPrice: 10, maxPrice: 20}) {
    console.log(opts);
}

getProduct();
getProduct({});

