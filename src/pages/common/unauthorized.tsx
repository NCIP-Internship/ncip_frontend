import { Button } from "@/components/ui/button";
import { FC } from "react";
import { Link } from "react-router-dom";

interface UnauthorizedProps {}

const Unauthorized: FC<UnauthorizedProps> = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <img src="/auauth.webp" />
        <h1 className="text-4xl font-bold text-center">Unauthorized Access</h1>
        <p className="text-center">
          You do not have permission to access this page.
        </p>
        <Button className="mt-5">
          <Link to={"/"}>Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;
