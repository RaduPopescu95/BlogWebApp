import Loader from "@/components/Common/Loader";
import Link from "next/link";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const EmailSignup = ({
  handleSubmit,
  data,
  setData,
  loader,
  confirmPassword,
  setConfirmPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  setShowPassword,
  showPassword,
}: any) => {
  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-3 block text-custom-sm font-medium text-dark"
          >
            Name
          </label>
          <input
            value={data.name}
            onChange={(e) =>
              setData({
                ...data,
                [e.target.name]: e.target.value,
              })
            }
            name="name"
            type="name"
            placeholder="Enter your name"
            className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-3 block text-custom-sm font-medium text-dark"
          >
            Email
          </label>
          <input
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                [e.target.name]: e.target.value,
              })
            }
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="password"
            className="mb-3 block text-custom-sm font-medium text-dark"
          >
            Password
          </label>
          <input
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                [e.target.name]: e.target.value,
              })
            }
            name="password"
            type={showPassword ? "text" : "password"} // Schimbă tipul pe baza stării `showPassword`
            placeholder="Enter your password"
            className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
          />
          <button
            type="button"
            className="absolute right-4 top-10 text-dark"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="confirmPassword"
            className="mb-3 block text-custom-sm font-medium text-dark"
          >
            Confirm Password
          </label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
          />
          <button
            type="button"
            className="absolute right-4 top-10 text-dark"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
        >
          Sign up {loader && <Loader />}
        </button>

        <p className="mt-5 text-center">
          Already a member?
          <Link href="/auth/signin" className="ml-1 text-dark">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default EmailSignup;
