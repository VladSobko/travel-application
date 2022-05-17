import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsersHistory } from "../../../_actions/user_actions";
import { useSelector } from "react-redux";
import moment from "moment";

function HistoryPage(props) {
  const dispatch = useDispatch();

  const usersHistory = useSelector((state) => state.user.usersHistoryData);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsersHistory()).then((response) => {
      console.log(response.data);
    });
  }, [dispatch]);

  return (
    <div style={{ width: "80%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1>History</h1>
      </div>
      <br />

      {user.userData && user.userData.email === "admin@admin.com" ? (
        <>
          {usersHistory &&
            usersHistory[0].map(
              (item) =>
                item.email !== "admin@admin.com" && (
                  <>
                    <h2>
                      {item.name} ({item.email})
                    </h2>
                    <table style={{ marginBottom: 50 }}>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Date of Purchase</th>
                        </tr>
                      </thead>

                      <tbody>
                        {item.history &&
                          item.history.map((history) => (
                            <tr key={item.id}>
                              <td>{history.name}</td>
                              <td>{history.price}</td>
                              <td>{history.quantity}</td>
                              <td>
                                {moment(history.dateOfPurchase).format(
                                  "DD-MM-YYYY"
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </>
                )
            )}
        </>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Date of Purchase</th>
            </tr>
          </thead>

          <tbody>
            {props.user.userData &&
              props.user.userData.history &&
              props.user.userData.history.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{moment(item.dateOfPurchase).format("DD-MM-YYYY")}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HistoryPage;
