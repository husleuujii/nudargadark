import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
  const { url, alternativeText } = image

  const loader = () => {
    return getStrapiMedia(image)
  }
  
  return (
    <NextImage
      loader={loader}
      layout="responsive"
      width={500}
      height={250}
      objectFit="cover"
      className="rounded"
      src={url}
      
      alt={alternativeText || ""}
    />
  )
}

export default Image
