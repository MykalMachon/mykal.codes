const isCloudinaryUrl = (cloudinaryUrl) => {
  return cloudinaryUrl.includes('res.cloudinary.com');
};

const decomposeCloudinaryUrl = (cloudinaryUrl) => {
  const slicePointOne = cloudinaryUrl.indexOf('upload/') + 'upload/'.length;
  const slicePointTwo = cloudinaryUrl.indexOf('/v');

  return {
    baseUrl: cloudinaryUrl.slice(0, slicePointOne),
    imageUrl: cloudinaryUrl.slice(slicePointTwo),
  };
};

/**
 * takes in a cloudinary upload image url, and returns a url formatted for low quality.
 * useful for placeholder images while the high quality counterpart loads.
 *
 * @param {str} cloudinaryUrl: a cloudinary image url
 * @returns a low quality image url, or the original url if it's not a cloudinary url
 */
export const getLowQualityUrl = (cloudinaryUrl) => {
  const urlIsValid = isCloudinaryUrl(cloudinaryUrl);
  const decomposedCloudinaryUrl = decomposeCloudinaryUrl(cloudinaryUrl);
  const { baseUrl, imageUrl } = decomposedCloudinaryUrl;
  return `${baseUrl}c_scale,e_blur:100,f_auto,q_80,w_100${imageUrl}`;
};

/**
 * takes in a cloudinary upload image url, and returns a url formatted for high quality
 *
 * @param {str} cloudinaryUrl: a cloudinary image url
 * @returns a high quality image url, or the original url if it's not a cloudinary url
 */
export const getHighQualityUrl = (cloudinaryUrl) => {
  const urlIsValid = isCloudinaryUrl(cloudinaryUrl);
  if(!urlIsValid) return cloudinaryUrl
  const decomposedCloudinaryUrl = decomposeCloudinaryUrl(cloudinaryUrl);
  const { baseUrl, imageUrl } = decomposedCloudinaryUrl;
  return `${baseUrl}c_scale,f_auto,w_1200${imageUrl}`;
};

// const test = () => {
//   const hq =
//     'https://res.cloudinary.com/mykalcodes/image/upload/v1655735935/Mykal%20Codes/mae-mu-dEUyLofZe5o-unsplash.jpg';
//   const hqImage = getHighQualityUrl(hq);
//   const lqImage = getLowQualityUrl(hq);
//   console.log(`
//   low quality: ${lqImage};
//   high quality: ${hqImage};
//   `);
// };

// test();
