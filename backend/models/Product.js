import mongoose from "mongoose"

const reviewSchema = mongoose.Schema({
	firstname:{type:String},
	lastname:{type:String},
	userrating:{type:Number, required:true},
	comment:{type:String, required:true},
	user:{
		type:mongoose.Schema.Types.ObjectId,
		required:true,
		ref:'User'
	},
})


const infoSchema = mongoose.Schema({
	location:{type:String},
	dealerContact:{type:String},
})

const ProductSchema = new mongoose.Schema({
	title:{
		type:String,
		required: [true, 'PLease add a Productname value']
	},
	user:{
		type:mongoose.Schema.Types.ObjectId,
		required:true,
		ref:'User'
	},
	image:{
		type:Array,
		required: [true, 'PLease add the image value for the product']
	},
	brand:{
		type:String,
		default:''
	},
	info:[infoSchema],
	reviews:[reviewSchema],
	percentage:{
		type:Number,
		default:0
	},
	capacity:{
	  type:Number,
	  default:''
	},
	colors:{
		type:Array,
		default:[]
	},
	tags:{
		type:Array,
		default:[]
	},
	description:{
		type:String,
		required:true,
	},
	qualities:{
		type:String,
	},
	shortdescription:{
		type:String,
		required:true,
	},
	rating:{
		type:Number,
		required:true,
		default:0
	},
	price:{
		type:Number,
		required:true,
	},
	countInStock:{
		type:Number,
		required:true,
	},
	numReviews:{
		type:Number,
		required:true,
		default:0
	}

}, 
{timestamps:true}
)


export default mongoose.model("Products", ProductSchema)