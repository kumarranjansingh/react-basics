import React, { Component } from 'react';
import { fetchFunds } from '../../services';
import Loader from '../common/Loader/Loader';
import FundsTable from './FundsTable';
import { deepClone } from '../common/objectUtils';
import { sortFunds, SORT_DIR, SORT_TYPE } from './sortFundUtil';
import getFilersMap from './FilterMaps';
import { getfilteredData } from './filterDatautil';
const initialSelectedFiler = {
  category: 'all',
  plan: 'all',
  type: 'all'
};

class ExplorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fundsData: [],
      sortDataStatus: {},
      filtersMap: {
        category: [],
        plan: [],
        type: []
      },
      selectedFilter: initialSelectedFiler,
      searchValue: '',
      filteredData: []
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetchFunds()
      .then(data => data.json())
      .then(data => {
        const filteredData = data.filter(
          d =>
            d.fund_category &&
            d.fund_type &&
            d.plan &&
            d.returns.year_1 &&
            d.returns.year_3
        );
        const filtersMap = getFilersMap(filteredData);
        this.setState({
          loading: false,
          fundsData: filteredData,
          filteredData,
          filtersMap
        });
      })
      .catch(err => console.log(err.message));
  }
  componentDidUpdate() {
    if (
      !Object.keys(this.state.sortDataStatus).length &&
      this.state.filteredData.length
    ) {
      this.sortData(0, undefined, SORT_TYPE[0]);
    }
  }
  sortData = (sortOnColNo, sortDir, sortType) => {
    const newSortDir = sortDir === SORT_DIR[0] ? SORT_DIR[1] : SORT_DIR[0];
    const sortedArray = sortFunds(
      deepClone(this.state.filteredData),
      sortOnColNo,
      newSortDir,
      sortType
    );
    this.setState({
      filteredData: sortedArray,
      sortDataStatus: { [sortOnColNo]: newSortDir }
    });
  };
  onFilterChange = e => {
    const filterChanged = e.target.name;
    const selectedValue = e.target.value;
    const newSelectedFilter = {
      ...this.state.selectedFilter,
      [filterChanged]: selectedValue.toLowerCase()
    };
    const filteredData = getfilteredData(
      this.state.fundsData,
      newSelectedFilter
    );
    this.setState({
      filteredData,
      selectedFilter: newSelectedFilter,
      sortDataStatus: {},
      searchValue: ''
    });
  };
  onSearchValueChange = e => {
    if (e.target.value.length > 2) {
      const filteredData = this.state.fundsData.filter(data => {
        return (
          data.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
        );
      });
      this.setState({
        filteredData,
        searchValue: e.target.value,
        selectedFilter: initialSelectedFiler,
        sortDataStatus: {}
      });
    } else {
      this.setState({
        searchValue: e.target.value,
        filteredData: this.state.fundsData,
        selectedFilter: initialSelectedFiler,
        sortDataStatus: {}
      });
    }
  };
  render() {
    const {
      loading,
      filteredData,
      sortDataStatus,
      filtersMap,
      selectedFilter,
      searchValue
    } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <FundsTable
        data={filteredData}
        sortData={this.sortData}
        sortDataStatus={sortDataStatus}
        filtersMap={filtersMap}
        selectedFilter={selectedFilter}
        onFilterChange={this.onFilterChange}
        searchValue={searchValue}
        onSearchValueChange={this.onSearchValueChange}
      />
    );
  }
}
export default ExplorePage;
