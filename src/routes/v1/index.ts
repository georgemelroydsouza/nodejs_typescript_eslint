import express from 'express';
import user from './profile/user';

const router = express.Router();

router.use('/profile', user);

export default router;
