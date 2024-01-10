import React from 'react';
import {Button} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useImage} from './ImageContext';


const Gallery = () => {
    const {setImage} = useImage();

    const pickImage = () => {
        console.log("Pick Image Called!")
        launchImageLibrary({mediaType:'photo'}, (response) => {
        if (response.didCancel) {
            console.log('Image picker canceled');
        //check
        } else if (response.errorCode) {
            console.error('Image picker error:', response.errorMessage);
        } else if (response.assets) {
            const photo = response.assets[0]
            setImage(selectedImage);
        }
        });
    }

    return (
        <Button title='Pick Image' onPress={pickImage}></Button>
    );
}

export default Gallery;