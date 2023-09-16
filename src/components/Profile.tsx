import { Input } from "@/components";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRbk } from "@/context/Provider";
import { useRef, useState } from "react";
import { toast } from "sonner";

const validationSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
});

type ValidationSchema = z.infer<typeof validationSchema>;
const Profile = () => {
  const inputUpdateAvatarPhoto = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const { profile, updateProfile } = useRbk();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const handleImageChange = async () => {
    const url = window.URL.createObjectURL(
      //@ts-ignore
      inputUpdateAvatarPhoto.current?.files[0]
    );

    setImageUrl(url);
  };
  const saveProfile = (data: any) => {
    updateProfile({ ...data, imageUrl });

    toast.success("Yout changes have been successfuly saved!");

    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(saveProfile)}
      className="flex flex-col px-10 py-5 bg-white rounded-lg"
    >
      <h2 className="text-4xl font-extrabold ">Profile Details</h2>
      <p className="my-4 text-lg text-gray-500">
        Add your details to create a personal touch to your profile.
      </p>

      <div className="flex items-center px-5 py-10 bg-gray-100 rounded-lg ">
        <label
          htmlFor="first_name"
          className="block w-1/2 mb-2 text-sm font-medium text-gray-900"
        >
          Profile picture
        </label>

        <div className="flex items-center justify-center flex-1 w-full max-w-xs ">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center py-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer px-7 "
          >
            {imageUrl && <img src={imageUrl} alt="" className="h-28" />}
            {!imageUrl && (
              <div className="flex flex-col items-center justify-center ">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 ">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 ">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            )}
            <input
              onChange={handleImageChange}
              accept="image/*"
              ref={inputUpdateAvatarPhoto}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-5 py-10 mt-4 bg-gray-100 rounded-lg ">
        <Input
          placeHolder={profile.firstName}
          label="First name"
          required
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          placeHolder={profile.lastName}
          label="Last name"
          required
          {...register("lastName")}
          error={errors.lastName?.message}
        />
        <Input
          placeHolder={profile.email}
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>
      <div className="mt-auto">
        <button
          type="submit"
          disabled={isLoading}
          className="flex px-6 py-2 mt-6 ml-auto text-white rounded-lg bg-violet-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export { Profile };
