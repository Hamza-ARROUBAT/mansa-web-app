const Product = require('../models/Product');
const generator = require('../utils/generator');
const Card = require('../models/Card');
const User = require('../models/User');

const createUserCards = async (cards, user) => {
  cards.map((cardData) => {
    Product.findOne({ product_code: cardData.product_code })
      .then((product) => {
        // validityStartDate and expiryDate
        const validityStartDate = new Date();

        const year = validityStartDate.getFullYear();
        const month = validityStartDate.getMonth();
        const day = validityStartDate.getDate();

        const expiryDate = new Date(year + product.validity, month, day);

        //
        const userCard = {
          id: generator.id(),
          currency: 'MDH',
          card_id: cardData.card_id,
          card_wording: `${user.lastName.toUpperCase()} ${user.firstName.toUpperCase()}`,
          validityStartDate,
          expiryDate,
          product: product,
          user,
        };

        const newCard = new Card(userCard);
        newCard
          .save()
          .then((card) => {
            console.log(`card "${card.product.product_wording}" created!`);

            User.findById(user._id).then((newUser) => {
              newUser.cards.push(card);
              return newUser.save();
              // .then((updatedUser) => {
              //   console.log(
              //     `user "${updatedUser.lastName.toUpperCase()} ${updatedUser.firstName.toUpperCase()}" updated!`
              //   );
              // })
              // .catch((err) => console.error(err));
            });
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });
};

module.exports = {
  createUserCards,
};
