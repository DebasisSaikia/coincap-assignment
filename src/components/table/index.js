import React, { useState } from "react";
import styled from "styled-components";
import style from "./tableStyles";
import Fade from "react-reveal/Fade";

const TableWrapper = styled.div`
  ${style}
`;

const tableHead = [
  "Rank",
  "Name",
  "Price",
  "Market Cap",
  "VWAP(24Hr)",
  "Supply",
  "Volume(24Hr)",
  "Change(24Hr)",
];

const TableData = ({ data, pageSet }) => {
  const [pageSize, setPageSize] = useState(pageSet);
  const [disable, setDisable] = useState(false);

  const viewMore = () => {
    pageSet = 100;
    setPageSize(100);
    setDisable(true);
  };

  const hideData = () => {
    setPageSize(50);
    setDisable(false)
  };

  return (
    <Fade bottom>
      <TableWrapper>
        <div className="table_container">
          <table>
            <thead>
              <tr className="table_head">
                {tableHead.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(0, `${pageSize}`).map((item) => {
                return (
                  <tr key={item.rank}>
                    <td>{item.rank}</td>
                    <td className="column2">
                      <img
                        src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                        alt="logo"
                      />
                      <span>
                        {item.id}
                        <p>{item.symbol}</p>
                      </span>
                    </td>
                    <td>$ {Number.parseFloat(item.priceUsd).toFixed(2)}</td>
                    <td>{item.marketCapUsd.slice(0, 3)}b</td>
                    <td>$ {item.vwap24Hr.slice(0, 7)}</td>
                    <td>{item.supply.slice(0, 4)}</td>
                    <td>$ {item.volumeUsd24Hr.slice(0, 4)}</td>
                    <td style={{ color:item.changePercent24Hr.indexOf('-') ? `green`:`red` }}>
                      {Number.parseFloat(item.changePercent24Hr).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="button_container">
          <button
            className="view_more"
            onClick={disable ? hideData : viewMore}
          >
            {disable ? "Hide " : "View More"}
          </button>
        </div>
      </TableWrapper>
    </Fade>
  );
};

export default TableData;
