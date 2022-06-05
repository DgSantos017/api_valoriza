import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import './database'
import { router } from './routes'
import { AppError } from './utils/AppError'

const app = express()

app.use(express.json())
app.use(router)

app.use((err:Error, req: Request, res: Response, next: NextFunction) => {
	if(err instanceof AppError){
		return res.status(err.statusCode).json({
			message: err.message
		})
	}
	return res.status(500).json({
		status: 'error',
		message: `internal server error - ${err.message}`
	})
})

app.listen(3000, () => console.log('running in port 3000'))