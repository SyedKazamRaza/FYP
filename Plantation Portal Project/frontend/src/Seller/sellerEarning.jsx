import React from "react";
import TopBar from "./TopBar";
import useFetch from "../useFetch";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";

function SellerEarning(props) {
  const user = useUser();
  const navigate = useNavigate();
  if (!user._id) {
    navigate("/login");
  }

  const storeid = user._id;

  const {
    data: storeEarningStats,
    error,
    isPending,
  } = useFetch(`http://localhost:5000/seller/storeEarningStats/${storeid}`);

  const { data: storeTransactions } = useFetch(
    `http://localhost:5000/seller/getStoreTransactions/${storeid}`
  );

  let counter = 0;
  function increment(params) {
    counter = counter + 1;
    return counter;
  }

  let temp = 0;
  function getCounter(params) {
    temp = temp + 1;
    return temp;
  }

  return (
    <section className="home-section">
      <div className="home-content">
        <TopBar />

        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Net Income</div>
              <div className="number">
                Rs{" "}
                {storeEarningStats.withdrawn +
                  storeEarningStats.pending +
                  storeEarningStats.cancel}
              </div>
            </div>
            <i className="bx bx-money cart"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Cleared Cash</div>
              <div className="number">Rs {storeEarningStats.withdrawn}</div>
            </div>
            <i className="bx bxs-credit-card cart two"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Pending</div>
              <div className="number">Rs {storeEarningStats.pending}</div>
            </div>
            <i className="bx bxs-wallet cart three"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Canceled</div>
              <div className="number">Rs {storeEarningStats.cancel}</div>
            </div>
            <i className="bx bxs-wallet-alt cart four"></i>
          </div>
        </div>
      </div>
      <div className="order-container">
        <div className="row row-50 justify-content-center">
          <div className="col-md-10 col-lg-1 col-xl-7">
            <h2 className="text-primary">Recent Transactions</h2>
            <div className="table-responsive">
              <table className="table">
                <tr>
                  <th>#</th>
                  <th>Buyer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                </tr>

                {storeTransactions.map((singleOrder) => {
                  return singleOrder.productsDetail.map((single) => {
                    return single.sellerId === storeid &&
                      single.status === "delivered" ? (
                      <tr key={getCounter()}>
                        <td>{increment()}</td>
                        <td>
                          {singleOrder.userInfo[0].fname +
                            " " +
                            singleOrder.userInfo[0].lname}
                        </td>
                        <td>{singleOrder.dateTime}</td>
                        <td>{single.total}</td>
                        <td>Cash on delivery</td>
                      </tr>
                    ) : (
                      <tr key={getCounter()}></tr>
                    );
                  });
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellerEarning;
