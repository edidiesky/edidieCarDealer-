import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app = express()
import connectDb from './db/connect.js'
import mongoose from "mongoose"


import { productdata } from './data/productData.js'
import Product from './models/Product.js'
import Order from './models/Order.js'
import User from './models/User.js'
import users from './data/userData.js'
import { orderData } from './data/orderData.js'

mongoose.connect(process.env.MONGO_URl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('mongo has been connected');
})

const importData = async () => {
  try {
    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = productdata.map((product) => {
      return { ...product, user: adminUser }
    })

      await Product.insertMany(sampleProducts)
      

      console.log('Data Imported!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }

const destroyData = async () => {
    try {


      console.log('Data Destroyed!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }

  if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }




