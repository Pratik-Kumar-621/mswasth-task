import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Cards = () => {
  // const [medicines, setMedicines] = useState([]);
  // React.useEffect(() => {
  //   fetch("https://dev.dashmed.in/sample-data")
  //     .then((response) => response.json())
  //     .then((data) => setMedicines(data));
  // }, []);

  const [show, setShow] = useState("");
  const medicines = useSelector((state) => state.medicines);

  return (
    <div className="cards">
      {medicines.data ? (
        <>
          {medicines.data?.map((medicine) => {
            const salts = medicine.saltName.split("+");

            return (
              <>
                <div
                  className="card"
                  onClick={() => {
                    console.log(show);
                    setShow(medicine.medName);

                    toast.info(medicine.medName + " clicked");
                  }}
                >
                  <div className="medname">{medicine.medName}</div>

                  <div className="saltname">
                    <b>Salts: </b>
                    {salts.map((item) => (
                      <span className="salts">{item}</span>
                    ))}
                  </div>

                  {show === medicine.medName ? (
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    ></ToastContainer>
                  ) : null}
                </div>
              </>
            );
          })}
        </>
      ) : (
        <div className="loading">Loading ...</div>
      )}
    </div>
  );
};

export default Cards;
