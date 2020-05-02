export type Image = {
  src: string;
};

const storage = chrome.storage.sync;

export const getImages = (): Promise<Image[]> => {
  return new Promise<Image[]>((resolve) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    storage.get('images', (items: { [key: string]: any }) => {
      const images: Image[] | undefined = items.images;
      if (!images) {
        resolve([]);
        return;
      }

      resolve(images);
    });
  });
};

export const storeImages = (images: Image[]): Promise<Image[]> => {
  return new Promise((resolve) => {
    storage.set({ images }, () => {
      resolve(images);
    });
  });
};

export const removeImage = async (image: Image): Promise<Image[]> => {
  const images = (await getImages()).filter((img) => img.src !== image.src);
  await storeImages(images);
  return getImages();
};
