import mongoose from "mongoose"

import bcrypt from 'bcryptjs'
const UserSchema = new mongoose.Schema({
	firstname:{
		type:String,
	},
	lastname:{
		type:String,
	},
	phone:{
		type:String,
		default:""
	},
	email:{
		type:String,
		required: [true, 'PLease add an emailvalue']
	},
	password:{
		type:String,
		required: [true, 'PLease add a password value']
	},
	isAdmin:{
		type:Boolean,
		required:true,
		default:false
	},
	country:{
		type:String,
		default:''
	},
	state:{
		type:String,
		default:''
	},
	address:{
		type:String,
		default:''
	},
	postalCode:{
		type:String,	
		default:''
	}
}, 
{timestamps:true}
)
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}


export default  mongoose.model("User", UserSchema)