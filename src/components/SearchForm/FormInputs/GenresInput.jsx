import useFetch from "@hooks/useFetch";
import { useWatch } from "react-hook-form";
import PropTypes from "prop-types";
import { useEffect } from "react";

const GenresInput = ({ control, value = [], onChange }) => {
  const mediaType = useWatch({ name: "mediaType", control });
  const { data } = useFetch({ url: `/genre/${mediaType}/list` }, { enabled: mediaType });
  useEffect(() => {
    onChange([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType]);

  return (
    <div className="flex flex-wrap gap-1">
      {(data.genres || []).map((genre) => (
        <p
          key={genre.id}
          className={`cursor-pointer rounded-lg border px-2 py-1 ${value.includes(genre.id) ? "bg-black text-white" : ""}`}
          onClick={() => {
            let newValue = [...value];
            if (value.includes(genre.id)) {
              newValue = newValue.filter((g) => g !== genre.id);
            } else {
              newValue = [...value, genre.id];
            }
            onChange(newValue);
          }}
        >
          {genre.name}
        </p>
      ))}
    </div>
  );
};

GenresInput.propTypes = {
  control: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
};

export default GenresInput;
