import OutletLayout from "@/components/Layout/outletLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = () => {
  return (
    <OutletLayout>
      <div className=" h-full p-5">
        <header className=" text-start">
          <h2 className="text-lg font-bold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed in the database.
          </p>
        </header>
        <form className="mt-10 flex flex-col gap-9">
          <div className="max-w-md flex flex-col gap-3 items-start">
            <Label htmlFor="name">Username</Label>
            <Input type="text" id="name" placeholder="Change your name" />
          </div>
          <div className="max-w-md flex flex-col gap-3 items-start">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Change your password"
            />
          </div>
          <div className="max-w-md flex flex-col gap-3 items-start">
            <Label htmlFor="password">Confirm Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Retype your password"
            />
          </div>
          <Button variant={"default"} className="max-w-sm mt-10">
            Save
          </Button>
        </form>
      </div>
    </OutletLayout>
  );
};

export default Page;
