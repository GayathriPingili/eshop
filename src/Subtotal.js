// import React from "react";
// import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";

 
// function Subtotal() {
//     const [{basket}, dispatch] = useStateValue();
//     return (
//         <div className="subtotal">
//             <CurrencyFormat 
//                 renderText = {(value) => (
//                     <>

//                         <p>
//                             Subtotal ({basket.length} items): <strong>${value}</strong>
//                         </p>
//                         <small className="subtotal__gift">
//                             <input type="checkbox" /> This order contains a gift
//                         </small>

//                     </>
//                 )}

//                 decimalScale={2}
//                 value={getBasketTotal(basket)}
//                 displayType={"text"}
//                 thousandSeparator={true}
                
//             />

//             <button>Proceed to Checkout</button>
//         </div>
//     )
// }

// export default Subtotal


import React from 'react';

function Subtotal({ basket = []  }) {
    // Function to calculate the total value of the basket
    const getBasketTotal = (basket) => basket.reduce((total, item) => total + item.price, 0);

    // Format the total value as currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
        </div>
    );
}

export default Subtotal;
