const products = [
    // Add your product data here, including image URLs
    { name: "Product 1", description: "Description of Product 1.", price: "$99.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" , link:"#" },
    { name: "Product 2", description: "Description of Product 2.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    { name: "Product 3", description: "Description of Product 3.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    { name: "Product 4", description: "Description of Product 4.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    { name: "Product 5", description: "Description of Product 5.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    { name: "Product 6", description: "Description of Product 6.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    { name: "Product 7", description: "Description of Product 6.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    { name: "Product 8", description: "Description of Product 6.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    { name: "Product 9", description: "Description of Product 6.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    { name: "Product 10", description: "Description of Product 6.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    { name: "Product 11", description: "Description of Product 6.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    { name: "Product 12", description: "Description of Product 6.", price: "$79.99", image: "file:///C:/Users/Divanshu/Downloads/flowe1.jpg" },
    // Add more products here
];

const productsPerPage = 6; // chage it how many products do you want it show on  one page
const productContainer = document.getElementById("product-container");
const paginationContainer = document.getElementById("pagination-container");

function showProducts(page) {
    productContainer.innerHTML = "";
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = products.slice(start, end);

    productsToShow.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <p class="product-details"><a class="link" href= ${product.link} > Show more details</a></p>
            <button>Buy Now</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

function createPaginationButtons() {
    const numPages = Math.ceil(products.length / productsPerPage);
    for (let i = 1; i <= numPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.className = "page-btn";
        pageBtn.dataset.page = i;
        pageBtn.textContent = i;
        pageBtn.addEventListener("click", () => showProducts(i));
        paginationContainer.appendChild(pageBtn);
    }
}

createPaginationButtons();
showProducts(1);
