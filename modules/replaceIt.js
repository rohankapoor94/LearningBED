module.exports=(temp, product) => {
    let ob = temp.replace(/{%PRODUCT_NAME%}/g, product.productName);
    ob = ob.replace(/{%IMAGE%}/g, product.image);
    ob = ob.replace(/{%FROM%}/g, product.from);
    ob = ob.replace(/{%NUTRIENTS%}/g, product.nutrients);
    ob = ob.replace(/{%DESCRIPTION%}/g, product.description);
    ob = ob.replace(/{%QUANTITY%}/g, product.quantity);
    ob = ob.replace(/{%PRICE%}/g, product.price);
    ob = ob.replace(/{%PRICE%}/g, product.price);
    ob = ob.replace(/{%ID%}/g, product.id);
    if (!product.organic) ob = ob.replace(/{%ORGANIC%}/g, "not-organic");
    // if (!product.organic)
    //   ob = ob.replace(/{%ORGANIC%}/g, "not-organic");
    return ob;
  };