import React from "react";

function Receipt({ setCheckout, checkout, cart }) {

    const foodPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = foodPrice * 0.09;
    const tipPrice = foodPrice * 0.15;
    const totalPrice = foodPrice + taxPrice + tipPrice;
    
  return (
    <div className="modal">
      <div className="receipt">
        <div className="modal_content">
          <span className="close" onClick={() => setCheckout(!checkout)}>
            &times;
          </span>
          {cart.map((item) => (
            <div 
            key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2"></div>
              <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
              <hr></hr>
              {cart.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Price of Food </div>
              <div className="col-1 text-right">${foodPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tip</div>
              <div className="col-1 text-right">
                ${tipPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>

          </>
        )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Receipt;
