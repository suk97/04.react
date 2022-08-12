import React, { useState } from "react";
function Box () {
    const [photos,setPhotos] = useState([]);
    let url = "https://jsonplaceholder.typicode.com/photos";


    function fetchAPI(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch((error) => console.log(error + '에러 발생'))
    }

    if(photos.length > 0){
        return(
            photos.map(photo => (
                <div>
                    <img src={photo.thumbnailUrl}></img>
                </div>
            ))
        )
    } else {
        return(
            <div>
                <button onClick={() => fetchAPI(url)}>Click</button>
            </div>
        );
    }
}
export default Box;