import Image from "next/image";

type HeadProps = {
  image: string;
  title?: string;
};

export default function Head(props: HeadProps) {
  return (
    <div className="flex items-center gap-2">
      <Image src={props.image} alt="img" />
      <h6 className="text-base font-semibold">{props.title}</h6>
    </div>
  );
}
