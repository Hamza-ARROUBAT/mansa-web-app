const Product = require('../models/Product');

const fetch_all_products = (req, res) => {
  Product.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetch_product = (req, res) => {
  const id = req.params.id;
  Product.findOne({ id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const add_product = (req, res) => {
  const now = String(Date.now());
  const middlePos = Math.ceil(now.length / 2);
  let randomId = `${now.substr(middlePos)}`;

  const product = new Product({ id: randomId, ...req.body });
  product
    .save()
    .then((result) => {
      res.json(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

// const user_delete = (req, res) => {
//   const id = req.params.id;
//   Product.findByIdAndDelete(id)
//     .then((result) => {
//       res.json({ redirect: '/blogs' });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

module.exports = {
  fetch_all_products,
  fetch_product,
  add_product,
};
