import { Request, Response } from 'express';
import User from '../models/user.model';

export const findAll = async (req: Request, res: Response) => {
	const search = req.query.search || '';
	const page: number = parseInt(req.query.page?.toString() || '1');
	const size: number = parseInt(req.query.size?.toString() || '5');

	// paginate search and populate comments
	User.find().then(data=>{
		res.send(data)
	})
};