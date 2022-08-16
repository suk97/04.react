import React, { useEffect, useRef, useState } from "react";

function FileInput( { name, value, onChange } ) {

    const [ preview, setPreview ] = useState();

    const inputRef = useRef();
    // console.log(inputRef.current);

    const handleFileChange = (e) => {
        // console.log(e.target.files[0]);
        const nextValue = e.target.files[0]

        onChange(name, nextValue);

    }

    // 파일 초기화
    const handleClearFile = () => {
        inputRef.current.value = '';
        onChange(name, null);
    }

    useEffect(() => {
        if(!value) return;
        const nextPreview = URL.createObjectURL(value);
        setPreview(nextPreview);
        
        return() => {
            setPreview();
            URL.revokeObjectURL(nextPreview);    
        }

    }, [value]);

    return(
        <div>
            {preview && <img src={preview} alt="preview" />}
            <input
                type="file"
                onChange={handleFileChange}
                ref={inputRef}
            />
            <button 
                type="button"
                onClick={handleClearFile}
            >X</button>
        </div>
    );
}

export default FileInput;