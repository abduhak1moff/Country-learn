import { useParams } from "react-router-dom";
import Loading from "../components/shares/Loading";
import { Alert } from "react-bootstrap";
import useFetch from "../hooks/useFetch";

const CountryPage = () => {
  const { countryName } = useParams();
  const { data, loading, error } = useFetch(`name/${countryName}`, {});

  const country = data.data?.[0];

  return (
    <div className="container">
      {error ? <Alert>Error</Alert> : null}
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex gap-5 flex-wrap align-items-center justify-content-center min-vh-100">
          <div>
            <img src={country?.flags?.png} alt="" />
          </div>
          <div>
            <h1>{country?.name?.official}</h1>
            <p>Languages: {Object.values(country?.languages || {})}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryPage;
