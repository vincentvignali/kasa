import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

type accomodation = {
  id: number;
  title: string;
  cover: string;
  description: string;
  location: string;
  equipments: string[];
  host: { name: string; picture: string };
  pictures: string[];
  rating: string;
  tags: string[];
};

const Home: FC<HomeProps> = () => {
  const [accomodations, setAccomodations] = useState<accomodation[] | []>([]);

  useEffect(() => {
    if (accomodations.length === 0)
      fetch("/accomodations.json")
        .then((data) => data.json())
        .then((jsonData) => setAccomodations(jsonData));
  }, []);

  return (
    <>
      <div className="image-banner">
        <h2>Chez vous, partout ailleurs</h2>
        <div className="overlay"></div>
      </div>
      <div className="cards-container">
        {accomodations.map((accomodation) => {
          return (
            <Link
              to={`/accomodation/${accomodation.id}`}
              key={`${accomodation.id}`}
              className="card-wrapper"
            >
              <div className="card">
                <div className="overlay"></div>
                <img src={`${accomodation.cover}`} alt="" />
                <div className="content">
                  <p className="location-title">{accomodation.title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
