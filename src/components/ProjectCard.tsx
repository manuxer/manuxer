
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const ProjectCard = ({ id, title, category, description, imageUrl }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`} className="block group h-full">
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all h-full flex flex-col">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <p className="text-sm font-medium text-muted-foreground mb-2">{category}</p>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 flex-1">{description}</p>
          <p className="mt-4 text-sm font-medium inline-flex items-center text-primary">
            View Case Study
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
