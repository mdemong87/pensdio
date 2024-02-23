

import { model, models, Schema } from "mongoose";


//blog schema
const BlogSchema = new Schema({
    tag: String,
    title: String,
    time: String,
    file: Object,
    bigFile: Object,
    dis: String,
    createdAt: { type: Date, default: Date.now() }
})



//blog model
const BlogModel = models.BlogModel || model("BlogModel", BlogSchema);


export default BlogModel;