fetch("products.json")
.then(function(response){
    //pharse JSON data from the response
    return response.json();
}
)
.then(function(products){
    let output = "";
    for (let i in products) {
        let product = products [i];
        output += `
        <div class="product">
            <img src="${product.image}" alt="${product.description}">
            <p class="title">${product.title}</p>
            <p class="description">${product.description}</p>
            <p class="price">
                <span>${product.price}</span>
                <span>&euro;</span>
            </p>
            <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
        </div>
        `;
    }

    // Display the generated HTML content in the specified container 
    document.querySelector(".products").innerHTML = output;
}
);