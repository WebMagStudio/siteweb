import Image from "next/image";

type SocialIconLinkProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

const SocialIconLink = ({ src, alt, width, height }: SocialIconLinkProps) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default SocialIconLink;
