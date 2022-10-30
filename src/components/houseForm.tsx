import Link from "next/link";
import React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import SearchBox from "./searchBox";

type Props = {};

interface IFormData {
  address: string;
  latitude: number | null;
  longitude: number | null;
  bedrooms: string;
  image: FileList;
}

const HouseForm = ({}: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormData>({ defaultValues: {} });
  const address = watch("address");

  const onSubmit = (data: IFormData) => {
    setSubmitting(true);
    handleCreate(data);
  };

  const handleCreate = async (data: IFormData) => {
    console.log(data);
    setSubmitting(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xl py-4">
      <h1 className="text-xl">Add a New House</h1>

      <div className="mt-4">
        <label htmlFor="search" className="block">
          Search for your address
        </label>

        <SearchBox
          onSelectAddress={(address, latitude, longitude) => {
            setValue("address", address);
            setValue("latitude", latitude);
            setValue("longitude", longitude);
          }}
          defaultValue=""
        />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      {address && (
        <>
          <div className="mt-4">
            <label
              htmlFor="image"
              className="p-4 border-dashed border-4 border-gary-600 block cursor-pointer"
            >
              Click to add image (16:9)
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              style={{ display: "none" }}
              {...register("image", {
                required: "Please select an image file",
              })}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event.target.files?.length) {
                  const file = event.target.files[0];
                  console.log("event target files:", file);
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    console.log(reader.result);
                    setPreviewImage(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            {previewImage && (
              <img src={previewImage} className="mt-4 object-cover" />
            )}
            {errors.image && <p>{errors.image.message}</p>}
          </div>

          <div className="mt-4">
            <label htmlFor="bedrooms" className="block">
              Bedrooms
            </label>
            <input
              type="number"
              id="bedrooms"
              className="p2"
              {...register("bedrooms", {
                required: "Please enter number of bedrooms",
                max: { value: 10, message: "Thats too big!" },
                min: { value: 1, message: "Must have at least one bedroom" },
              })}
            />
            {errors.bedrooms && <span>{errors.bedrooms.message}</span>}
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
              disabled={submitting}
            >
              Save
            </button>
            <Link href="/" className="ml-3">
              Cancel
            </Link>
          </div>
        </>
      )}
    </form>
  );
};

export default HouseForm;
