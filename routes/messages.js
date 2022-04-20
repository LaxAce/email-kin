import { Router } from "express";
import { getMessages, createMessage } from "../controller/messages.js";

const router = Router();

router.route('/:name').get(getMessages);
router.route('/').post(createMessage);

export default router;