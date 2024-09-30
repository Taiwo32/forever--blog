import express from 'express';
import { signup, login, forgotPassword, resetPassword, updatePassword, protect, restrictTo } from '../controllers/authController.js';
import { getAllUsers, removeUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.patch('/update-password', protect, updatePassword);

router.get('/admin-only', protect, restrictTo('admin'), (req, res) => {
    res.send("Admin access only");
});

router.get('/user',getAllUsers);
router.delete('/user/:id',removeUser);

export default router;
