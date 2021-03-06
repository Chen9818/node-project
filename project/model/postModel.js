//建立schema
const mongoose = require('mongoose')
const postsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',  //對應user collection
        required: [true, '貼文id未填寫']
    },
    // tags:{
    //     type: String,
    //     required: [true, '貼文標籤 tags 未填寫']
    // },
    // type: {
    //     type: String,
    //     enum:['group','person'],
    //     required: [true, '貼文類型 type 未填寫']
    // },
    image: {
        type: String,
        default: ""
    },
    createAt: {
        type: Date,
        default: Date.now,
        // select: false
    },
    content: {
        type: String,
        required: [true, 'Content 未填寫'],
    },
    likes: {
        type: Number,
        default: 0
    },
    comments:{
        type: Number,
        default: 0
    }
},
{
    versionKey:false
})

const Post = mongoose.model(
    'post', //collection
    postsSchema
)

module.exports = Post