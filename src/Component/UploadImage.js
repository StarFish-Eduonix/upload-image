import React, {useState} from "react";
import axios from "axios";

const UploadImage = () => {

    const [item, setItem] = useState(null);
    const [url, setUrl] = useState("");

    const selctedImage = (e) => {
        console.log("selected image");
        console.log(e.target.files[0]);
         setItem(e.target.files[0]);
    }

    function uploadImg(e){
         e.preventDefault()

        const formData = new FormData(); 
        formData.append("file", item);
         axios.post("https://instagram-express-app.vercel.app/api/post/upload", formData)
         .then(res => setUrl(res.data.data.file_url))
         .catch(err => console.log(err))

    }


    return(
        <div>
            <h1>Upload Image</h1> 

            <form onSubmit={uploadImg}>
                <input type="file" name="file" 
                onChange={selctedImage}  
                />
                <button type="submit">Upload</button>
            </form>

            {
                url && (
                    <img src={url} alt="img" />
                )
            }
        </div>
    )
}

export default UploadImage;