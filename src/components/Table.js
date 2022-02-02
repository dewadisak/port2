import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex-table">
          <div className="table-item">
            <div className="">
              <table>
                <thead className="head">
                  <tr>
                    <th>ASSETS</th>

                    <th>PRICE</th>

                    <th>24H %</th>

                    <th>24H CHANGE</th>
                  </tr>
                </thead>

                <tbody className="body">
                  {this.props.data.map((coin) => (
                    <tr>
                      <td>
                        <div className="flex-cell">
                          <img src={coin.image} />
                          {coin.symbol.toUpperCase() + " / USD"}
                        </div>
                      </td>
                      <td>{"$" + coin.current_price.toFixed(2)}</td>
                      {coin.price_change_percentage_24h < 0 ? (
                        <td>
                          <p className="red">
                            {coin.price_change_percentage_24h.toFixed(2) + "%"}
                          </p>
                        </td>
                      ) : (
                        <td>
                          <p className="green">
                            {coin.price_change_percentage_24h.toFixed(2) + "%"}
                          </p>
                        </td>
                      )}

                      {coin.price_change_24h < 0 ? (
                        <td>
                          <p className="red">
                            {"$" + coin.price_change_24h.toFixed(2)}
                          </p>
                        </td>
                      ) : (
                        <td>
                          <p className="green">
                            {"$" + coin.price_change_24h.toFixed(2)}
                          </p>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
