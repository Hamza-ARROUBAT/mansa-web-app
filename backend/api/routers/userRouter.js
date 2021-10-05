const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/all', userController.fetch_all_users);
router.get('/:id', userController.fetch_one_user);

router.post('/', userController.add_user);
router.delete('/:id', userController.remove_user);

router.post('/auth', userController.auth_user);

router.get('/email-confirmed/:username', userController.email_confirmed);
// router.put('/verify-email', userController.confirm_email);
router.get('/is-first-time-login/:username', userController.is_first_time_login);
router.put('/create-password', userController.create_password);


module.exports = router;
