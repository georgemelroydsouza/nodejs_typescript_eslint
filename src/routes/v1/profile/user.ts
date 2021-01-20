import express from 'express';
import { SuccessResponse } from '../../../core/ApiResponse';
import asyncHandler from '../../../helpers/asyncHandler';
import { BadRequestError } from '../../../core/ApiError';

const router = express.Router();

router.get(
    '/public/id/:id',
    asyncHandler(async (req, res) => {
        if (!req.params.id) throw new BadRequestError('User not registered');
        return new SuccessResponse('success', req.params.id).send(res);
    }),
);

export default router;
