import { FC } from "react";

interface InstagramEmbedProps {
  url: string;
}

export const InstagramEmbed: FC<InstagramEmbedProps> = ({ url }) => {
  // Ensure we append /embed to the post URL if not present
  const embedUrl = url.includes('/embed') ? url : `${url.split('?')[0]}embed`;

  return (
    <div className="w-full flex justify-center border border-black p-4 bg-white">
      <iframe
        src={embedUrl}
        width="400"
        height="500"
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
        allow="encrypted-media"
        className="max-w-full"
      ></iframe>
    </div>
  );
};
