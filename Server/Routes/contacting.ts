import express from 'express';
import { DisplayContactingListPage, DisplayContactingEditPage, DisplayContactAddPage, ProcessContactAddPage, ProcessContactEditPage, ProcessContactDeletePage } from '../Controllers/contacting';
const router = express.Router();
export default router;

import { AuthGuard } from '../Util/index';

router.get('/', DisplayContactingListPage);

router.get('/cedit/:id',AuthGuard, DisplayContactingEditPage);

/* GET - display /clothing-list/add page. */
router.get('/cadd',AuthGuard, DisplayContactAddPage);


/* POST - process /clothing-list/add page */
router.post('/cadd',AuthGuard, ProcessContactAddPage);

/* POST - process /clothing-list/edit/:id page */
router.post('/cedit/:id',AuthGuard, ProcessContactEditPage);

/* GET - process /clothing-list/delete/:id */
router.get('/cdelete/:id',AuthGuard, ProcessContactDeletePage);