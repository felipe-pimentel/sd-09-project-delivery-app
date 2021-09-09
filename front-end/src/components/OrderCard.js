import React from 'react';
import PropTypes from 'prop-types';
import './OrderCard.css';

const OrderCard = (props) => {
  const {
    id,
    status,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
  } = props;

  const formatDate = saleDate.split('T')[0];

  return (
    <div className="card-container">
      <span data-testid={ `seller_orders__element-order-id-${id}` }>
        Pedido
        <br />
        { `000${id}` }
      </span>
      <a href={ `/seller/orders/${id}` }>
        <div className="details-container">
          <div className="status-container">
            <span data-testid={ `seller_orders__element-delivery-status-${id}` }>
              { status }
            </span>
          </div>
          <div className="date-and-price-container">
            <p data-testid={ `seller_orders__element-order-date-${id}` }>
              { formatDate }
            </p>
            <p data-testid={ `seller_orders__element-card-price-${id}` }>
              { `R$ ${totalPrice.replace('.', ',')}` }
            </p>
          </div>
        </div>
        <p data-testid={ `seller_orders__element-card-address-${id}` }>
          { `${deliveryAddress}, ${deliveryNumber}` }
        </p>
      </a>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};

export default OrderCard;
