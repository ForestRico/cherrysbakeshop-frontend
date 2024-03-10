import React from "react";

// The 'Intl.NumberFormat' constructor formats the 'price' according to the specified 'locale' and 'currency'. 
export default function Price({ price, locale, currency }) {
    const formatPrice = () => {
        const formattedPrice = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
        }).format(price);

        // Prepend dollar sign to the formatted price
        return formattedPrice;
    };

    return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
    locale: 'en-AU',
    currency: 'AUD'
};
