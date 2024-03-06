import noImagePlaceholder from "../assets/image-placeholder.webp";

/**
 * Adjusts the image URL to return a cropped version of the image with dimensions 600x400 pixels.
 * If the original URL is empty or not provided, a default placeholder image is returned.
 */
const getCroppedImageUrl = (url: string) => {
  // Return a placeholder image if the URL is not provided or empty
  if (!url) return noImagePlaceholder;

  // The substring in the URL after which the cropping parameters should be inserted
  const target = "media/";

  // Find the position in the URL to insert the cropping parameters
  const index = url.indexOf(target) + target.length;

  // Return the new URL with cropping parameters
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
