import express from 'express'
import 'reflect-metadata'
import './database'

const app = express()


app.listen(3000, () => console.log('running in port 3000'))