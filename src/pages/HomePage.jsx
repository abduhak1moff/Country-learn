import { Alert, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import CountryCard from "../components/card/CountryCard";
import Loading from "../components/shares/Loading";

import useFetchPagination from "../hooks/useFetchPagination";
import { useState } from "react";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const url = search ? `name/${search}` : "all";

  const params =
    sort !== "default"
      ? {
          sort: "title",
          order: sort,
        }
      : {};

  const {
    data: countries,
    error,
    loading,
    pagination,
  } = useFetchPagination(url, JSON.stringify(params));

  return (
    <Container>
      <InputGroup className="my-3">
        <Form.Control
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Searching countries"
        />
        <InputGroup.Text>
          <Form.Select onChange={(e) => setSort(e.target.value)}>
            <option value="default">Default</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
      {error ? <Alert>Error</Alert> : null}
      {loading ? (
        <Loading />
      ) : (
        <Row xs={1} sm={2} md={3} lg={4}>
          {countries.map((country) => (
            <Col className="mb-3" key={country.name.official}>
              <CountryCard
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                image={country.flags.png}
              />
            </Col>
          ))}
        </Row>
      )}
      <div className=" d-flex justify-content-center ">{pagination}</div>
    </Container>
  );
};

export default HomePage;
