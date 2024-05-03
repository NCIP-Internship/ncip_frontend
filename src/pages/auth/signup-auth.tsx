import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const signUpSchema = z
  .object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TypeSignUpSchema = z.infer<typeof signUpSchema>;

const SignUpAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TypeSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: TypeSignUpSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
    reset();
  };

  return (
    <div className="grid grid-cols-2 border my-20">
      <div className="px-12 py-16 flex gap-6 flex-col items-center justify-center">
        <h1 className="text-5xl text-wrap font-semibold max-w-80">Sign up</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid min-w-[400px] max-w-lg text-left items-center gap-1.5">
            <Label htmlFor="fname">First Name</Label>
            <Input
              type="text"
              id="fname"
              placeholder="John"
              {...register("first_name")}
            />
            {errors.first_name ? (
              <p className="text-red-500 mt-2">First name is required</p>
            ) : null}
          </div>
          <div className="grid min-w-[400px] max-w-lg text-left items-center gap-1.5">
            <Label htmlFor="lname">Last Name</Label>
            <Input
              type="text"
              id="lname"
              placeholder="Cruz"
              {...register("last_name")}
            />
            {errors.last_name ? (
              <p className="text-red-500 mt-2">Last name is required</p>
            ) : null}
          </div>
          <div className="grid min-w-[400px] max-w-lg text-left items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="john@example.com"
              {...register("email")}
            />
            {errors.email ? (
              <p className="text-red-500 mt-2">Enter a valid email</p>
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
          <div className="grid min-w-[400px] max-w-lg text-left items-center gap-1.5">
            <Label htmlFor="cpass">Confirm Password</Label>
            <Input
              type="password"
              id="cpass"
              placeholder="Re-type Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword ? (
              <p className="text-red-500 mt-2">{`${errors.confirmPassword.message}`}</p>
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
            <button
              type="submit"
              className="bg-primary text-white py-2 rounded"
            >
              Sign in
            </button>
          )}
        </form>
        <div className="flex gap-2">
          <span>Already have an account?</span>
          <Link to={"/auth"} className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </div>
      <div className="bg-primary px-12 py-16 flex flex-col items-center justify-center gap-6">
        <img src="/logo.png" alt="logo" className="w-[220px] h-[220px]" />
        <h1 className="text-white  text-3xl text-wrap font-semibold max-w-80">
          National Commission of Indigenous Peoples
        </h1>
      </div>
    </div>
  );
};

export default SignUpAuth;
