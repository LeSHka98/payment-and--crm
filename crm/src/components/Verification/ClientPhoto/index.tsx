// libraries
import React, { useRef, useState } from 'react';
import { PixelCrop } from 'react-image-crop';
// components
import ImageCrop from 'components/Verification/ClientPhoto/ImageCrop';
// helpers
import { getFromLocalStorage, saveToLocalStorage } from 'helpers/localStorage';
import { getCroppedImage } from 'helpers/getCroppedImage';

const ClientPhoto = () => {
  const savedImage = getFromLocalStorage('verificationImage');
  const imgRef = useRef<HTMLImageElement>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [src, setSrc] = useState<string>();
  const [resultImage, setResultImage] = useState(null);
  const [fileValue, setFileValue] = useState<string>('');

  const downloadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      const url = URL.createObjectURL(img);

      setSrc(url);
      setFileValue('');
    }
  };

  const saveImage = () => {
    const croppedImage = getCroppedImage(imgRef.current, completedCrop);

    saveToLocalStorage('verificationImage', croppedImage);
    setResultImage(croppedImage);
    setSrc(null);
  };

  const renderImage = () => {
    if (savedImage && !src) {
      return <img alt="img" src={savedImage} />;
    }

    if (resultImage && !src) {
      return <img alt="img" src={resultImage} />;
    }

    if (src) {
      return (
        <ImageCrop
          ref={imgRef}
          saveImage={saveImage}
          setCompletedCrop={setCompletedCrop}
          src={src}
        />
      );
    }

    return null;
  };

  return (
    <>
      <div className="photo-btn-block">
        <input accept="image/*" className="image-input-file" id="file" onChange={downloadImage} type="file" value={fileValue} />
        <label className="btn btn-secondary" htmlFor="file">
          {savedImage ? 'Заменить фото' : 'Загрузить фото'}
        </label>
      </div>
      {renderImage()}
    </>
  );
};

export default ClientPhoto;
