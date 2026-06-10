import Link from "next/link";
import { FC } from "react";

interface ProjectCardProps {
  title: string;
  roles: string;
  link: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({ title, roles, link }) => {
  return (
    <div className="flex flex-col border-b border-black py-4 w-full">
      <div className="flex justify-between items-start mb-2">
        <Link 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl lg:text-4xl font-bold hover:underline decoration-1 underline-offset-4"
        >
          {title}
        </Link>
        <span className="text-sm font-normal">[ &#x2197; ]</span>
      </div>
      <div className="flex justify-between items-end w-full">
         <p className="text-sm lg:text-base font-normal max-w-[80%]">{roles}</p>
      </div>
    </div>
  );
};
