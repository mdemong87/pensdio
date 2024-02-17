import { revalidatePath } from "next/cache";


async function getData() {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
            next: {
                revalidate: 0,
            },
        });
        const path = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`;
        revalidatePath(path)
        return response.json();
    } catch (error) {
        console.log(error);
    }
}


export default getData;