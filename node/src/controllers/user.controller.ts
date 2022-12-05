import { Request, Response } from 'express';
import User from '../models/user.model';

export const findAll = async (req: Request, res: Response) => {
	const search = req.query.search || '';
	const page: number = parseInt(req.query.page?.toString() || '1');
	const size: number = parseInt(req.query.size?.toString() || '5');

	// paginate search and populate comments
	User.find().then(data => {
		res.send(data)
	})
};

export const store = async (req: Request, res: Response) => {
	// const user = new User({
	// 	nom: req.body.nom,
	// 	prenom: req.body.prenom,
	// 	specialite: req.body.specialite,
	// 	cin: req.body.cin,
	// 	phone: req.body.phone,
	// 	email: req.body.email,
	// 	address: req.body.address,
	// });
	// user.save().then(data=>{
	// 	res.send(data)
	// })

	const user = new User(req.body);
	user.save((err: any) => {
		if (err) return res.status(500).send(err.message);
		else return res.status(200).send(user);
	})

}

export const destroy = async (req: Request, res: Response) => {
	User.findById(req.params.id, (err: any, status: any) => {
		if (err) return res.status(500).send(err);
		else if (!status) return res.status(404).send("not found");
		else {
			status.remove((err: any) => {
				if (err) return res.status(500).send(err);
				else return res.status(200).send(status);
			});
		}
	}
	)
};



