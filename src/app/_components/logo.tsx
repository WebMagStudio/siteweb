import Image from "next/image";

type LogoProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function Logo({ src, width, height, alt }: LogoProps) {
  return <Image src={src} width={width} height={height} alt={alt} />;
}
