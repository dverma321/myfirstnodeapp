$(document).ready(function() {
    const products = $(".product");
    const productsPerPage = 6;
    let currentPage = 1;

    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        products.hide();
        products.slice(startIndex, endIndex).show();
    }

    showProducts(currentPage);

    $(".next-page").click(function() {
        if (currentPage < Math.ceil(products.length / productsPerPage)) {
            currentPage++;
            showProducts(currentPage);
        }
    });

    $(".prev-page").click(function() {
        if (currentPage > 1) {
            currentPage--;
            showProducts(currentPage);
        }
    });
});
