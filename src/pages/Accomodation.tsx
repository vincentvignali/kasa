import { FC } from "react";
import { Params, useParams } from "react-router-dom";

interface AccomodationProps {}

const Accomodation: FC<AccomodationProps> = () => {
  const params = useParams();
  console.log("🚀 ~ params", params);
  return (
    <>
      <div>🛠 Accomodation </div>
      <p>Params number : {`${params.id}`}</p>
    </>
  );
};

export default Accomodation;
