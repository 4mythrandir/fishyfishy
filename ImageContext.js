import React, {createContext, useContext, useState} from 'react';

const ImageContext = createContext();

export const ImageProvider = ({children}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const setImage = (image) => {
        setSelectedImage(image);
    }

    return (
        <ImageContext.Provider value={{selectedImage,setImage}}>
            {children}
        </ImageContext.Provider>
    );
};

export const useImage = () => {
    return useContext(ImageContext);
}