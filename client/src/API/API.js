const API_URL = "https://ecommerce-personal-api.herokuapp.com";

export const getProducts = async () => {
    const products = await fetch(`${API_URL}/products`);
    return products.json();
}

export const updateProductsStock = async (id, quantity) => {

    const updateData = {
        "stock": quantity
    };
    
    const products = await fetch(`${API_URL}/products/updateProduct/stock/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });

    let response;

    if(products.headers.get('content-type').includes('text/html')) {
        const message = await products.text();

        response = {
            message
        };
    } else {
        response = await products.json();
    }

    if(products.ok){
        return response;
    }

    const error = new Error(response.message);
    error.response = response;
    throw error;
}

export const getProductsFromCart = async () => {
    const products = await fetch(`${API_URL}/cart`);
    return products.json();
}

export const addProductsToCart = async (entry) => {
    const products = await fetch(`${API_URL}/cart`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(entry)
    });

    let response;

    if(products.headers.get('content-type').includes('text/html')) {
        const message = await products.text();

        response = {
            message
        };
    } else {
        response = await products.json();
    }

    if(products.ok){
        return response;
    }

    const error = new Error(response.message);
    error.response = response;
    throw error;
}


export const updateProductsInCart = async (entryID, entryQuantity) => {

    
    const updateData = {
        "quantity": entryQuantity
    };
    
    const products = await fetch(`${API_URL}/cart/updateCart/quantity/${entryID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });

    let response;

    if(products.headers.get('content-type').includes('text/html')) {
        const message = await products.text();

        response = {
            message
        };
    } else {
        response = await products.json();
    }

    if(products.ok){
        return response;
    }

    const error = new Error(response.message);
    error.response = response;
    throw error;
}


export const updateProductsStockInCart = async (entryID, stock) => {
    const updateData = {
        "stock":stock
    };

    const products = await fetch(`${API_URL}/cart/updateCart/stock/${entryID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });

    let response;

    if(products.headers.get('content-type').includes('text/html')) {
        const message = await products.text();

        response = {
            message
        };
    } else {
        response = await products.json();
    }

    if(products.ok){
        return response;
    }

    const error = new Error(response.message);
    error.response = response;
    throw error;
}

export const deleteProductFromCart = async (id) => {
    const deleteResponse = await fetch(`${API_URL}/cart/${id}`, {
        method: 'DELETE',
        headers:{
            'content-type': 'application/json'
        }
    })

    let response

    if(deleteResponse.headers.get('content-type').includes('text/html')){
        const message = await deleteResponse.text();

        response = {
            message
        };
    } else {
        response = await deleteResponse.json();
    }

    if(deleteResponse.ok){
        return response;
    }

    const error = new Error(response.message);
    error.response = response;
    throw error;
}

export const clearCart = async () => {
    const deleteResponse = await fetch(`${API_URL}/cart`, {
        method: 'DELETE',
        headers:{
            'content-type': 'application/json'
        }
    })

    let response

    if(deleteResponse.headers.get('content-type').includes('text/html')){
        const message = await deleteResponse.text();

        response = {
            message
        };
    } else {
        response = await deleteResponse.json();
    }

    if(deleteResponse.ok){
        return response;
    }

    const error = new Error(response.message);
    error.response = response;
    throw error;
}