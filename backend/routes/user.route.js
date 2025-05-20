import express from 'express';

const router = express.Router();
import { registerUser, getAllUser, getUserById, deleteUserById, editUserById} from '../controllers/user.controller.js';


router.post('/registerUser', registerUser);
router.get('/getAllUser', getAllUser);
router.get('/getUser/:id', getUserById);
router.delete('/deleteUser/:id', deleteUserById);
router.put('/editUser/:id', editUserById);

export default router;