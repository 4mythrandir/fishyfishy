import {MobileModel, torch, torchvision, media} from 'react-native-pytorch-core';
import * as ImageNetClasses from './ImageNetClasses.json';

const t = torchvision.transforms;

const MODEL_URL =
  'https://github.com/facebookresearch/playtorch/releases/download/v0.1.0/mobilenet_v3_small.ptl';

let model = null;

export default async function classifyFish(image){
    const w = image.getWidth()
    const h = image.getHeight()

    const blob = media.toBlob(image)

    let tensor = torch.fromBlob(blob, [height, width, 3]);

    tensor = tensor.permute([2, 0, 1]);

    tensor = tensor.div(255);

    const centerCrop = t.centerCrop(Math.min(w,h));
    tensor = centerCrop(tensor);

    const resize = t.resize(524);
    tensor = resize(tensor); 

    tensor = tensor.unsqueeze(0);

    console.log(tensor.shape);

    if (model == null) {
        const filePath = await MobileModel.download(MODEL_URL);
        model = await torch.jit._loadForMobile(filePath);
    }
    
    const output = await model.forward(tensor);

    const maxIdx = output.argmax().item();

    console.log(ImageNetClasses[maxIdx]);
    return ImageNetClasses[maxIdx];
    
}