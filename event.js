// A pair of jeggings
const item_jeggings = {
    item_id: 'SKU_123',
    item_name: 'jeggings',
    item_category: 'pants',
    item_variant: 'black',
    item_brand: 'Google',
    price: 9.99
};

// A pair of boots
const item_boots = {
    item_id: 'SKU_456',
    item_name: 'boots',
    item_category: 'shoes',
    item_variant: 'brown',
    item_brand: 'Google',
    price: 24.99
};

// A pair of socks
const item_socks = {
    item_id: 'SKU_789',
    item_name: 'ankle_socks',
    item_category: 'socks',
    item_variant: 'red',
    item_brand: 'Google',
    price: 5.99
};

function viewItemList() {
    const params1 = {
        item_list_id: 'L001',
        item_list_name: 'Related products',
        items: [item_jeggings, item_boots, item_socks]
    };

    // Log event
    firebase.analytics().logEvent(firebase.analytics.EventName.VIEW_ITEM_LIST, params1);
}

function selectItem() {
    const params1 = {
        item_list_id: 'L001',
        item_list_name: 'Related products',
        items: [item_jeggings, item_boots, item_socks]
    };

    // Log event
    firebase.analytics().logEvent(firebase.analytics.EventName.VIEW_ITEM_LIST, params1);
}

function viewItem() {
    // Prepare ecommerce event params
    const params3 = {
        currency: 'USD',
        value: 9.99,
        items: [item_jeggings]
    };

    // Log event
    firebase.analytics().logEvent(firebase.analytics.EventName.VIEW_ITEM, params3);
}

function addToWishList() {
    // Specify order quantity
    const item_jeggings_quantity = {
        ...item_jeggings,
        quantity: 2
    };

    // Prepare ecommerce bundle
    const params4 = {
        currency: 'USD',
        value: 19.98,
        items: [item_jeggings_quantity]
    };

    // Log event when a product is added to a wishlist
    firebase.analytics().logEvent(firebase.analytics.EventName.ADD_TO_WISHLIST, params4);
}

function addToCart() {
    // Specify order quantity
    const item_jeggings_quantity = {
        ...item_jeggings,
        quantity: 2
    };

    // Prepare ecommerce bundle
    const params4 = {
        currency: 'USD',
        value: 19.98,
        items: [item_jeggings_quantity]
    };

    // Log event when a product is added to a wishlist
    firebase.analytics().logEvent(firebase.analytics.EventName.ADD_TO_CART, params4);
}

function beginCheckOut() {
    // Prepare ecommerce params
    const params7 = {
        currency: 'USD',
        value: 14.98, // Total Revenue
        coupon: 'SUMMER_FUN',
        items: [item_jeggings]
    };

    // Log event
    firebase.analytics().logEvent(firebase.analytics.EventName.BEGIN_CHECKOUT, params7);
}

function addShippingInfo() {
    // Prepare ecommerce params
    const params8 = {
        currency: 'USD',
        value: 14.98, // Total Revenue
        coupon: 'SUMMER_FUN',
        shipping_tier: 'Ground',
        items: [item_jeggings]
    };

    // Log event
    firebase.analytics().logEvent(firebase.analytics.EventName.ADD_SHIPPING_INFO, params8);
}

function addPaymentInfo() {
    // Prepare ecommerce params
    const params9 = {
        currency: 'USD',
        value: 14.98, // Total Revenue
        coupon: 'SUMMER_FUN',
        payment_type: 'Visa',
        items: [item_jeggings]
    };

    // Log event
    firebase.analytics().logEvent(firebase.analytics.EventName.ADD_PAYMENT_INFO, params9);
}

function purchase() {
    // Prepare ecommerce bundle
    const params10 = {
        transaction_id: 'T12345',
        affiliation: 'Google Store',
        currency: 'USD',
        value: 14.98, // Total Revenue
        tax: 2.85,
        shipping: 5.34,
        coupon: 'SUMMER_FUN',
        items: [item_jeggings]
    };

    // Log event
    firebase.analytics().logEvent(firebase.analytics.EventName.PURCHASE, params10);
}