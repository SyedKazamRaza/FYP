import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import TopBar from "./TopBar";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useUser } from "../userContext";

const PendingRequests = () => {
  const navigate = useNavigate();
  const user = useUser();
  var [counter, setCounter] = useState(0);
  const [allstores, setAllStores] = useState([]);

  if (!user._id) {
    navigate("/login");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var [refresh, setRefresh] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/store/")
      .then((response) => {
        if (response.status === 200) {
          setAllStores(
            response.data.map((st) => {
              return st;
            })
          );
        }
      })
      .catch((error) => {});
  }, []);

  console.log("Prining: ", allstores);

  useEffect(() => {
    axios
      .get("http://localhost:5000/store/")
      .then((response) => {
        if (response.status === 200) {
          setAllStores(
            response.data.map((st) => {
              return st;
            })
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh]);

  useEffect(() => {
    stores.slice().map((store) => {
      if (store.status === "pending") {
        setCounter((counter += 1));
      }
    });
  }, []);

  const {
    error,
    isPending,
    data: stores,
  } = useFetch("http://localhost:5000/order/");

  const handleDelete = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h2 style={{ color: "red" }}>Are you sure?</h2>
            <p>You want to remove this request?</p>
            <button
              className="button button-primary button-pipaluk"
              onClick={onClose}
            >
              No
            </button>
            {"    "}
            <button
              className="button button-primary button-pipaluk"
              onClick={() => {
                axios
                  .delete("http://localhost:5000/store/" + id)
                  .then((response) => {
                    if (response.status === 200) {
                      let t = refresh + 1;
                      setRefresh(t);
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                onClose();
              }}
            >
              Yes
            </button>
          </div>
        );
      },
    });
  };

  const handleAccept = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h2 style={{ color: "red" }}>Are you sure?</h2>
            <p>You want to accept this request?</p>
            <button
              className="button button-primary button-pipaluk"
              onClick={onClose}
            >
              No
            </button>
            {"    "}
            <button
              className="button button-primary button-pipaluk"
              onClick={() => {
                axios
                  .post("http://localhost:5000/store/update/" + id)
                  .then((response) => {
                    if (response.status === 200) {
                      let t = refresh + 1;
                      setRefresh(t);
                    }

                    navigate("/admin/stores");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                onClose();
              }}
            >
              Yes
            </button>
          </div>
        );
      },
    });
  };
  return (
    <section className="home-section">
      <div className="home-content">
        <TopBar />
        <div className="order-container">
          <div className="row row-50 justify-content-center">
            <div className="col-md-10 col-lg-1 col-xl-7">
              <h2 className="text-primary">Manage Requests</h2>
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <div
                    className="table-responsive"
                    style={{ marginTop: "40px" }}
                  >
                    <table className="table">
                      {counter !== 0 && (
                        <tr>
                          <th>Store Name</th>
                          <th>Email</th>
                          <th>Ph #</th>
                          <th>Add/Remove</th>
                        </tr>
                      )}
                      {allstores.slice().map(
                        (store) =>
                          store.status === "pending" && (
                            <>
                              {/* {setCounter((counter += 1))} */}
                              <tr key={store._id}>
                                <td>{store.storeName}</td>
                                <td>{store.username}</td>
                                <td>{store.phno}</td>
                                <td>
                                  <span></span>
                                  <Link
                                    className=" btn-success "
                                    to="/admin/pendingrequests"
                                    onClick={() => {
                                      handleAccept(store._id);
                                    }}
                                  >
                                    <i className=" fa-check"></i>
                                  </Link>
                                  <span></span>
                                  <Link
                                    className="btn-success  "
                                    to="/admin/pendingrequests"
                                    onClick={() => {
                                      handleDelete(store._id);
                                    }}
                                  >
                                    <i className=" fa-remove"></i>
                                  </Link>
                                </td>
                              </tr>
                            </>
                          )
                      )}
                    </table>
                  </div>
                </div>
                {allstores.length === 0 && <h3>No More Pending Requests...</h3>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PendingRequests;
