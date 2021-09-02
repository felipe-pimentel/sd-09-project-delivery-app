const { Sales } = require('../../database/models');
const salesProductsServices = require('./salesProduct');
const usersServices = require('./users');
const { messageError } = require('../middwares/errors');

const { 
  SALE_NOT_CREATED,
  SALE_NOT_EXIST,
  SALE_PRODUCT_NOT_CREATED, 
  SALE_NOT_UPDATED } = require('../middwares/errorMessages');

const { INTERNAL_ERROR_STATUS, NOT_FOUND_STATUS } = require('../middwares/httpStatus');

const getById = async (id) => {
  const sale = await Sales.findByPk(id);

  if (!sale) {
    throw messageError(NOT_FOUND_STATUS, SALE_NOT_EXIST);
  }

  return sale;
};

const createProducts = async (saleId, products) => {
  products.forEach((product) => {
    const { productId, quantity } = product;

    const newProductSale = salesProductsServices.create({
      saleId,
      productId,
      quantity,

    });
   
    if (!newProductSale) {
      throw messageError(INTERNAL_ERROR_STATUS, SALE_PRODUCT_NOT_CREATED);
    }
  });
};

const create = async (sale, login) => {
  const { seller, products } = sale;
  const { id } = login.data;

  const saleUser = await usersServices.getById(id);

  const saleSeller = await usersServices.getById(seller);

  const newSale = await Sales.create({ userId: saleUser.id, 
    sellerId: saleSeller.id,
    totalPrice: sale.totalPrice,
    deliveryAddress: sale.deliveryAddress,
    deliveryNumber: sale.deliveryNumber,
    status: 'Pendente',
  });

  if (!newSale) {
    throw messageError(INTERNAL_ERROR_STATUS, SALE_NOT_CREATED);
  }

  await createProducts(newSale.id, products);

  const fullSale = await getById(newSale.id);

  return fullSale;
};

const update = async (id, sale) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = sale;
 
  const saleUser = await usersServices.getById(userId);

  const saleSeller = await usersServices.getById(sellerId);

  const updateSale = await Sales.update({ userId: saleUser.id, 
    sellerId: saleSeller.id,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  }, { where: { id } });

  if (!updateSale) {
    throw messageError(INTERNAL_ERROR_STATUS, SALE_NOT_UPDATED);
  }

  const fullSale = await getById(id);

  return fullSale;
};

module.exports = {
  create,
  getById,
  update,
};