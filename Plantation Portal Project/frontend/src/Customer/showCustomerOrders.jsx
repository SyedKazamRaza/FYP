import useFetch from "../useFetch";

const ShowCustomerOrders = () => {
  const {
    error,
    isPending,
    data: orders,
  } = useFetch("http://localhost:5000/order/");
  return (
    <div className="order-container">
      <div className="row row-50 justify-content-center">
        <div className="col-md-10 col-lg-1 col-xl-7">
          <h3>My Orders</h3>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tabs-4-1">
              <div className="table-responsive">
                <table className="table">
                  <tr>
                    <th>Order no</th>
                    <th>Store</th>
                    <th>Order Details</th>
                    <th>Placed on</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>101001</td>
                    <td>Gardening Miracle</td>
                    <td>Sunflower Seeds</td>
                    <td>15 May 2022</td>
                    <td>2000</td>
                    <td>
                      <p className="status">Active</p>
                    </td>
                  </tr>
                  <tr>
                    <td>101001</td>
                    <td>Gardening Miracle</td>
                    <td>Sunflower Seeds</td>
                    <td>15 May 2022</td>
                    <td>2000</td>
                    <td>
                      <p className="status">Completed</p>
                    </td>
                  </tr>
                  <tr>
                    <td>101001</td>
                    <td>Gardening Miracle</td>
                    <td>Sunflower Seeds</td>
                    <td>15 May 2022</td>
                    <td>2000</td>
                    <td>
                      <p className="status">Completed</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCustomerOrders;
