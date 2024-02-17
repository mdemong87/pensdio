import ConnectDB from "@/mongoDB/connectionDb";
import BlogModel from "@/mongoDB/schemaAndmodel";
import { photoUpload } from "../../../cloudinary/clooudinaryConfig";


export async function GET() {
    try {

        //connection database
        ConnectDB();

        //create blog
        const data = await BlogModel.find({});


        return Response.json({
            success: true,
            status: 200,
            message: "Fetching all the successfully",
            data: data
        })

    } catch (error) {
        return Response.json({
            success: false,
            status: 504,
            message: "There was a server side problem"
        })

    }

}





export async function POST(request) {

    try {

        const { tag, title, time, file, dis } = await request.json();


        const blogData = {
            tag,
            title,
            time,
            file: await photoUpload(file,),
            dis
        }

        //connection database
        ConnectDB();

        //create blog
        await BlogModel.create(blogData, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("successfull added in database.");
            }
        });

        return Response.json({
            success: true,
            status: 200,
            message: "Blog posted successfully"
        })


    } catch (error) {
        return Response.json({
            success: false,
            status: 504,
            message: "There was a server side problem"
        })
    }




}


