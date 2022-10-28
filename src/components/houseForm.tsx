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
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormData>({ defaultValues: {} });
  //   useEffect(() => {
  //     register({ name: "address" }, { required: "Please enter the address" });
  //     register({ name: "latitude" }, { required: true, min: -90, max: 90 });
  //   }, [register]);

  const onSubmit = (data: IFormData) => {
    setSubmitting(true);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xl py-4">
      <h1 className="text-xl">Add a New House</h1>
      <div className="mt-4">
        <label htmlFor="search" className="block">
          Search for your address
        </label>
        {errors.address && <p>{errors.address.message}</p>}
        <SearchBox
          onSelectAddress={(address, latitude, longitude) => {
            setValue("address", address);
            setValue("latitude", latitude);
            setValue("longitude", longitude);
          }}
          defaultValue=""
        />
      </div>
    </form>
  );
};

export default HouseForm;
