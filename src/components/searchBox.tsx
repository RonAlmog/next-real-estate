import { Address } from "cluster";
import React, { ChangeEvent } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useGoogleMapsScript, Libraries } from "use-google-maps-script";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

type Props = {};

interface ISearchBoxProps {
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void;
  defaultValue: string;
}
const libraries: Libraries = ["places"];
const SearchBox = ({ onSelectAddress, defaultValue }: ISearchBoxProps) => {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
    libraries,
  });
  if (!isLoaded) return null;
  if (loadError) return <div>Error Loading</div>;

  return (
    <ReadySearchBox
      onSelectAddress={onSelectAddress}
      defaultValue={defaultValue}
    />
  );
};

function ReadySearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log("value:", e.target.value);

    if (e.target.value === "") {
      onSelectAddress("", null, null);
    }
  };

  const handleSelect = async (address: string) => {
    console.log("address", { address });
  };

  console.log({ status, data });

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        id="search"
        value={value}
        onChange={handleChange}
        disabled={!ready}
        placeholder="Search your location"
        className="w-full p-2"
        autoComplete="off"
      />
    </Combobox>
  );
}

export default SearchBox;
