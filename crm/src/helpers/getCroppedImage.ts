// libraries
import { PixelCrop } from 'react-image-crop';

const dx = 0;
const dy = 0;

export const getCroppedImage = (image: HTMLImageElement, crop: PixelCrop) => {
  const canvas:HTMLCanvasElement = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    dx,
    dy,
    crop.width,
    crop.height,
  );

  return canvas.toDataURL('image/jpeg');
};
