import PropTypes from "prop-types";

const TVShowInformation = ({ tvInfo = {} }) => {
  return (
    <div>
      <p className="mb-4 text-[1.6vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvInfo.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {(tvInfo.origin_country || []).map((countryCode) => (
          <img
            key={countryCode}
            src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
            className="mr-1 mt-1 w-[1.4vw]"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Network</p>
        {(tvInfo.networks || []).map((network) => (
          <img
            key={network.id}
            src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
            className="mt-2 invert"
          />
        ))}
      </div>
    </div>
  );
};

TVShowInformation.propTypes = {
  tvInfo: PropTypes.any,
};

export default TVShowInformation;
