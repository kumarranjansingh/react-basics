import React from 'react';
import { Link } from 'react-router-dom';
import { SORT_TYPE } from './sortFundUtil';
import './FundsTable.css';
import Filters from './Filters';
const NO_OF_DATA_TO_SHOW_IN_DOM = 100;
const COLUMN_ROW = [
  'Name',
  'Category',
  'Type',
  'Plan',
  '1 Year Returns',
  '3 Year Returns'
];
const FundsTable = ({
  data,
  sortData,
  sortDataStatus,
  filtersMap,
  selectedFilter,
  onFilterChange,
  searchValue,
  onSearchValueChange
}) => {
  const dataToShow =
    data.length > NO_OF_DATA_TO_SHOW_IN_DOM
      ? data.slice(0, NO_OF_DATA_TO_SHOW_IN_DOM)
      : data;
  return (
    <React.Fragment>
      <div className="fund-tables">
        <Filters
          filtersMap={filtersMap}
          selectedFilter={selectedFilter}
          onFilterChange={onFilterChange}
          searchValue={searchValue}
          onSearchValueChange={onSearchValueChange}
        />
        <table>
          <thead>
            <tr>
              {COLUMN_ROW.map((col, index) => {
                return (
                  <th
                    key={index}
                    onClick={() =>
                      sortData(
                        index,
                        sortDataStatus[index],
                        index > 3 ? SORT_TYPE[1] : SORT_TYPE[0]
                      )
                    }
                  >
                    <span
                      className={
                        sortDataStatus[index] ? sortDataStatus[index] : ''
                      }
                    >
                      {col}
                      <span> {`${sortDataStatus[index] ? ' ↓' : ''}`}</span>
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {dataToShow.map((row, index) => {
              const {
                name,
                fund_category,
                fund_type,
                plan,
                returns,
                code
              } = row;
              return (
                <tr key={index}>
                  <td>
                    <div className="fund-name">
                      <Link to={`explore/${code}`}>{name}</Link>
                    </div>
                  </td>
                  <td>{fund_category}</td>
                  <td>{fund_type}</td>
                  <td>{plan}</td>
                  <td>{returns.year_1}</td>
                  <td>{returns.year_3}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default FundsTable;
