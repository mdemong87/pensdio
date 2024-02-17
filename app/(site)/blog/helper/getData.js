import ConnectDB from "@/mongoDB/connectionDb";
import BlogModel from "@/mongoDB/schemaAndmodel";

async function getData() {


    ConnectDB();

    const finddata = await BlogModel.find({});
    return finddata;
}


export default getData;