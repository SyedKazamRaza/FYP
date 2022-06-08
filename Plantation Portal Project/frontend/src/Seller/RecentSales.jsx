// import useFetch from "../useFetch";

const RecentSales = () => {
  // const { error, isPending, data: orders } = useFetch('http://localhost:5000/order/')

  return (
    <div className="recent-sales box">
      <div className="title">Recent Sales</div>
      <div className="sales-details">
        <ul className="details">
          <li className="topic">Date</li>
          <li>
            <div>20 March 2022</div>
          </li>
          <li>
            <div>20 March 2022</div>
          </li>
          <li>
            <div>20 March 2022</div>
          </li>
          <li>
            <div>20 March 2022</div>
          </li>
          <li>
            <div>20 March 2022</div>
          </li>
          <li>
            <div>20 March 2022</div>
          </li>
          <li>
            <div>20 March 2022</div>
          </li>
          <li>
            <div>20 March 2022</div>
          </li>
          <li>
            <div>20 March 2022</div>
          </li>
        </ul>
        <ul className="details">
          <li className="topic">Customer</li>
          <li>
            <div>Customer's Name</div>
          </li>
          <li>
            <div>Customer's Name</div>
          </li>
          <li>
            <div>Customer's Name</div>
          </li>
          <li>
            <div>Customer's Name</div>
          </li>
          <li>
            <div>Customer's Name</div>
          </li>
          <li>
            <div>Customer's Name</div>
          </li>
          <li>
            <div>Customer's Name</div>
          </li>
          <li>
            <div>Customer's Name</div>
          </li>
          <li>
            <div>Customer's Name</div>
          </li>
        </ul>
        <ul className="details">
          <li className="topic">Sales</li>
          <li>
            <div>Delivered</div>
          </li>
          <li>
            <div>Pending</div>
          </li>
          <li>
            <div>Returned</div>
          </li>
          <li>
            <div>Delivered</div>
          </li>
          <li>
            <div>Pending</div>
          </li>
          <li>
            <div>Returned</div>
          </li>
          <li>
            <div>Delivered</div>
          </li>
          <li>
            <div>Pending</div>
          </li>
          <li>
            <div>Delivered</div>
          </li>
        </ul>
        <ul className="details">
          <li className="topic">Total</li>
          <li>
            <div>Rs 204.98</div>
          </li>
          <li>
            <div>Rs 24.55</div>
          </li>
          <li>
            <div>Rs 25.88</div>
          </li>
          <li>
            <div>Rs 170.66</div>
          </li>
          <li>
            <div>Rs 56.56</div>
          </li>
          <li>
            <div>Rs 44.95</div>
          </li>
          <li>
            <div>Rs 67.33</div>
          </li>
          <li>
            <div>Rs 23.53</div>
          </li>
          <li>
            <div>Rs 46.52</div>
          </li>
        </ul>
      </div>
      <div className="button-area">
        <div className="d-flex">
          <div className="button button-block button-all">See All</div>
        </div>
      </div>
    </div>
  );
};

export default RecentSales;
