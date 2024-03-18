import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required(),
  TOS: yup.boolean().required(),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center p-32">
      <div
        className="rounded-lg border bg-card text-card-htmlForeground shadow-sm w-full max-w-md"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <div>Create an account</div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Enter your information to get started
          </p>
        </div>
        <div className="p-6 flex">
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 w-full">
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Jane Doe"
                required=""
                {...register("name")}
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="jane@example.com"
                required=""
                type="email"
                autoComplete="email"
                {...register("email")}
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="Username"
              >
                Username
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="username"
                required=""
                placeholder="janeybaney"
                {...register("username")}
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                placeholder="********"
                required=""
                type="password"
                autoComplete="new-password"
                {...register("password")}
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="confirm-password"
                placeholder="********"
                required=""
                type="password"
                autoComplete="new-password"
                {...register("confirmPassword")}
              />
            </div>
            <div className="flex items-center">
              <button
                type="button"
                role="checkbox"
                aria-checked="false"
                className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-htmlForeground"
                id="agree"
              ></button>
              <input
                aria-hidden="true"
                tabIndex="-1"
                type="checkbox"
                style={{
                  transform: "translateX(-100%)",
                  position: "absolute",
                  pointerEvents: "none",
                  opacity: "0",
                  margin: "0px",
                  width: "16px",
                  height: "16px",
                }}
                {...register("TOS")}
              />

              <label
                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2 text-sm leading-none"
                htmlFor="agree"
              >
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-htmlForeground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              type="submit"
            >
              Create an account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
