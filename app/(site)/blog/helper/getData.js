
async function getData() {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}


export default getData;