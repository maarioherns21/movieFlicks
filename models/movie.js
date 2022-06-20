const mongoose = require('mongoose');
const Schema = mongoose.Schema

const movieSchema = new Schema({
    movieName: String,
    runningTime: {type: Number, default: false},
    img: { data: Buffer, contentType: String, require:false},
    movieInfo: String,
    movieCast: String,
    url: {type: String},
    movieYear: {type: Number , default: false},
    author: {type: String, default:false},
},
{timestamps: true}
)

module.exports = mongoose.model('movie', movieSchema)
