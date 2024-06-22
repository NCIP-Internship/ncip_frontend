import { Button } from "@/components/ui/button";
import { FC } from "react";
import { Link } from "react-router-dom";

interface NotfoundProps {}

const Notfound: FC<NotfoundProps> = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <img src="/not-found.webp" />
        <h1 className="text-4xl font-bold text-center">404</h1>
        <p className="text-center">Page not found.</p>
        <Button className="mt-5">
          <Link to={"/"}>Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Notfound;
