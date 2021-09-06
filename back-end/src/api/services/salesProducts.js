const { salesProducts } = require('../../database/models');

const getAll = async () => {
  const allSales = await salesProducts.findAll();
 return allSales;
};

const getById = async (saleId) => {
  const sale = await salesProducts.findAll({
    where: { saleId },
  });
  return sale;
};

module.exports = {
  getById,
  getAll,
};