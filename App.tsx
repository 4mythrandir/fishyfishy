import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet } from 'react-native';
import classifyFish from './ImageClassifier';
import Gallery from './CameraGallery';
import {ImageProvider, useImage} from './ImageContext';
//import RNTFliteModule from './android/app/src/main/java/com/awesomeproject/RNTFlite';

const App = () => {
  //const [image, setImage] = useState<string|undefined>('');
  //const {Module} = NativeModules;

  //tflite.close()

  /*const uploadImage = async (imageUri: string) => {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const result = await response.json();
      console.log('Classification Result: ', result);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };*/

  const {selectedImage} = useImage();

  return (
    <ImageProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Fish Classification App</Text>
        <Button title="Classify Fish" onPress={classifyFish}></Button>
        {selectedImage && <Image source={{uri: selectedImage}} style={{width: 200, height: 200}}></Image>}
        <Gallery></Gallery>
      </View>
    </ImageProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default App;
