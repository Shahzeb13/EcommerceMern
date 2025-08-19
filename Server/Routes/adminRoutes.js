import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { PopulateDashboard } from '../Controllers/adminController.js';
const adminRouter = express.Router();


adminRouter.get("/dashboard" , protect , isAdmin , PopulateDashboard)

export default adminRouter;