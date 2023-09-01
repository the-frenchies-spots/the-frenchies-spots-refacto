import { Injectable } from '@nestjs/common';
import cloudinary from 'src/utils/cloudinary.config';

@Injectable()
export class ImageService {
  async uploadImage(files: string[]): Promise<string[]> {
    const uploadPromises = files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file);
      return result.secure_url;
    });

    return Promise.all(uploadPromises);
  }

  async deleteImage(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId);
  }
}
