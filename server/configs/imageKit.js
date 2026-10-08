import ImageKit from "@imagekit/nodejs";

let imageKit = null;

try {
  if (process.env.IMAGEKIT_PRIVATE_KEY) {
    imageKit = new ImageKit({
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    });
  }
} catch (err) {
  console.warn("ImageKit not initialized:", err.message);
  imageKit = null;
}

export default imageKit;
