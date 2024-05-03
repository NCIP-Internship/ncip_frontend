import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type TypeLoginSchema = z.infer<typeof loginSchema>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TypeLoginSchema>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: TypeLoginSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    reset();
  };

  return (
    <div className="grid grid-cols-2 border mt-20">
      <div className="px-12 py-16 flex gap-6 flex-col items-center justify-center">
        <h1 className="text-5xl text-wrap font-semibold max-w-80">Sign in</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid min-w-[400px] max-w-lg text-left items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="john@example.com"
              {...register("email")}
            />
            {errors.email ? (
              <p className="text-red-500">Enter a valid email</p>
            ) : null}
          </div>
          <div className="grid min-w-[400px] max-w-lg text-left items-center gap-1.5">
            <Label htmlFor="pass">Password</Label>
            <Input
              type="password"
              id="pass"
              placeholder="At least 8 characters"
              {...register("password")}
            />
            {errors.password ? (
              <p className="text-red-500 mt-2">
                Password should be at least 8 characters
              </p>
            ) : null}
          </div>
          <span>
            <a
              href="#"
              className="min-w-full text-primary hover:underline text-right"
            >
              Forgot password?
            </a>
          </span>

          {isSubmitting ? (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-primary text-white py-2 rounded"
            >
              Sign in
            </Button>
          )}
        </form>
        <div className="flex gap-2">
          <span>Don't have an account?</span>
          <Link to={"signup"} className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </div>
      <div className="bg-primary px-12 py-16 flex flex-col items-center justify-center gap-6">
        <img src="./logo.png" alt="logo" className="w-[220px] h-[220px]" />
        <h1 className="text-white  text-3xl text-wrap font-semibold max-w-80">
          National Commission of Indigenous Peoples
        </h1>
      </div>
    </div>
  );
};

export default SignIn;
