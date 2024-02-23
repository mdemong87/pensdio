"use client"

import Container from "@/app/componnent/Container";
import { useState } from "react";

export default function Page() {

    const [title, settitle] = useState('');
    const [tag, settag] = useState('');
    const [time, settime] = useState('');
    const [file, setfile] = useState('');
    const [dis, setdis] = useState('');
    const [isloading, setisloading] = useState(false);
    const [bigFile, setbigFile] = useState('');


    const handleFileChangle = (e) => {
        const file = e.target.files[0];
        if (file.size < 300000) {
            const filereacder = new FileReader();
            filereacder.onload = (event) => {
                setfile(event.target.result)
            }
            filereacder.readAsDataURL(file);
        } else {
            alert("File Size is too Large.Keep it is Less the 200 KB");
        }

    }

    const handleBigFileChangle = (e) => {
        const file = e.target.files[0];
        if (file.size < 300000) {
            const filereacder = new FileReader();
            filereacder.onload = (event) => {
                setbigFile(event.target.result)
            }
            filereacder.readAsDataURL(file);
        } else {
            alert("File Size is too Large.Keep it is Less the 200 KB");
        }

    }



    const handlepostBlog = async () => {

        if (tag != '' && title != '' && time != '' && file != '' && bigFile != '' && dis != '') {

            setisloading(true);

            const res = await fetch("/api/blog", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({ tag, title, time, file, bigFile, dis })
            });
            const resposns = await res.json();
            if (resposns.success) {
                alert("Blog Posted Successfully");
                settitle('');
                settime('');
                setfile('');
                setbigFile('');
                setdis('');
            } else {
                alert("Blog Post Failed");
            }
            setisloading(false);
        } else {
            alert("Please!Fill all flied");
        }

    }

    return (
        <div className="py-20">
            <Container>
                <div className="pt-10">
                    <h1 className="text-center text-4xl sFont text-gray-500 font-semibold">Create Blog</h1>

                    {isloading ? <div>
                        <h1 className="text-2xl font-bold text-center pt-32">Loading...</h1>
                    </div> : <div className="flex flex-col mt-10">

                        <input onChange={(e) => { settag(e.target.value) }} className="border p-2 mb-5 text-lg broder-gray-500 rounded-md" type='text' value={tag} placeholder="Blog Tag" />

                        <input onChange={(e) => { settitle(e.target.value) }} className="border p-2 text-lg broder-gray-500 rounded-md" type='text' value={title} placeholder="Blog Title" />

                        <input onChange={(e) => { settime(e.target.value) }} className="border my-5 p-2 text-lg broder-gray-500 rounded-md" type='text' value={time} placeholder="Reading Time" />

                        <input onChange={(e) => { handleFileChangle(e) }} className="border mb-5 p-2 text-lg broder-gray-500 rounded-md" type='file' placeholder="Blog Themnail" />

                        <input onChange={(e) => { handleBigFileChangle(e) }} className="border mb-5 p-2 text-lg broder-gray-500 rounded-md" type='file' placeholder="Blog Themnail Big" />


                        <textarea onChange={(e) => { setdis(e.target.value) }} className="border p-2 text-lg broder-gray-500 rounded-md  h-60" value={dis} placeholder="Blog Discription"></textarea>


                        <button onClick={() => handlepostBlog()} className="pBg p-2 text-white cursor-pointer font-semibold text-xl rounded-md mt-10">Post a Blog</button>
                    </div>
                    }

                </div>
            </Container>
        </div>
    )
}