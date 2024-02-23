import ConnectDB from "@/mongoDB/connectionDb";
import BlogModel from "@/mongoDB/schemaAndmodel";

export async function GET(request) {
    try {

        const queryurl = request.url;
        const url = queryurl.split('/');
        const finalUrl = url[url.length - 1];

        //connection database
        ConnectDB();

        //create blog
        const data = await BlogModel.findById(finalUrl);


        // Check if data exists
        if (data) {
            return Response.json({
                success: true,
                status: 200,
                message: "Fetching Single Data Successfully",
                data: data
            })
        } else {

            return Response.json({
                success: false,
                status: 504,
                message: "Data Mot Found"
            })
        }


    } catch (error) {
        return Response.json({
            success: false,
            status: 504,
            message: "There was a server side problem"
        })

    }

}


