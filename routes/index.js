import express from 'express';
import {
    homePage,
    aboutusPage,
    destinationsPage,
    opinionsPage,
    detailedTripPage
} from '../controllers/pageControllers.js';
import {
    saveOpinion
} from '../controllers/opinionController.js';

const router = express.Router();

router.get('/', homePage);
router.get('/aboutus', aboutusPage);
router.get('/destinations', destinationsPage);
router.get('/destinations/:slug', detailedTripPage)
router.get('/opinions', opinionsPage);
router.post('/opinions', saveOpinion)

export default router;