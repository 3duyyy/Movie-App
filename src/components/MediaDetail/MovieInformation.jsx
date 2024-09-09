import { currencyFormatter } from "@libs/utils";
import PropTypes from "prop-types";

const MovieInformation = ({ movieInfo = {} }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{movieInfo.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {(movieInfo.origin_country || []).map((countryCode) => (
          <img
            key={countryCode}
            src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
            className="mr-1 mt-1 w-[1.4vw]"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{movieInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{currencyFormatter(movieInfo.budget)}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{currencyFormatter(movieInfo.revenue)}</p>
      </div>
    </div>
  );
};

MovieInformation.propTypes = {
  movieInfo: PropTypes.any,
};

export default MovieInformation;
