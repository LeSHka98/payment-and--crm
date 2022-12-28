// libraries
import React, {
  Dispatch, forwardRef, SetStateAction, useState, ForwardedRef,
} from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
// components
import { Button } from 'reactstrap';
// constants
import { CROP_SETTINGS } from 'constants/Verification/clientPhoto';

type ImageCropType = {
  saveImage: () => void,
  setCompletedCrop: Dispatch<SetStateAction<PixelCrop>>,
  src: string
};

const ImageCrop = forwardRef<HTMLImageElement, ImageCropType>((props: ImageCropType, ref: ForwardedRef<HTMLImageElement>) => {
  const { saveImage, setCompletedCrop, src } = props;
  const [crop, setCrop] = useState<Crop>({ ...CROP_SETTINGS });

  return (
    <div className="image-container">
      <ReactCrop
        className="pre-image"
        crop={crop}
        locked
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
      >
        <img ref={ref} alt="img" className="image-crop" src={src} />
      </ReactCrop>
      <Button onClick={saveImage}>Сохранить</Button>
    </div>
  );
});

export default ImageCrop;
