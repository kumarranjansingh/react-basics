import React from 'react';
const GetFilterMapSelect = ({ filtersMapList, label, selected, onFilterChange, name }) => {
  return (
    <React.Fragment>
      <label>{label}</label>
      <select name={name} onChange={onFilterChange}>
        {filtersMapList.map(item => {
          return <option selected={selected.toLowerCase() === item.toLowerCase() ? true : false }>{item}</option>;
        })}
      </select>
    </React.Fragment>
  );
};
const Filters = ({ filtersMap, selectedFilter, onFilterChange, onSearchValueChange, searchValue }) => {
  return (
    <React.Fragment>
    <div className='filters-wrapper'>
      <div className="filter-row">
        <GetFilterMapSelect
          label="Fund category"
          filtersMapList={filtersMap.category}
          selected = {selectedFilter.category}
          onFilterChange={onFilterChange}
          name='category'
        />
      </div>
      <div className="filter-row">
        <GetFilterMapSelect
          label="Fund Type"
          filtersMapList={filtersMap.type}
          selected = {selectedFilter.type}
          onFilterChange={onFilterChange}
          name='type'
        />
      </div>
      <div className="filter-row">
        <GetFilterMapSelect
          label="Fund Plan"
          filtersMapList={filtersMap.plan}
          selected = {selectedFilter.plan}
          onFilterChange={onFilterChange}
          name='plan'
        />
      </div>
    </div>
    <div className='search-row'> Search Funds By Name: 
      <input name='search' onChange={onSearchValueChange} value={searchValue}/></div>
    </React.Fragment>
  );
};

export default Filters;
