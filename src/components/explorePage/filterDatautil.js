export const getfilteredData = (data, selectedFilterList) => data.filter(data => {
    let isCategoryValid = true;
    let isPlanValid = true;
    let isTypeValid = true;
    if(selectedFilterList.category!=='all'){
      isCategoryValid = data.fund_category.toLowerCase() === selectedFilterList['category']
    }
    if(selectedFilterList.plan!=='all'){
      isPlanValid = data.plan.toLowerCase() === selectedFilterList['plan']
    }
    if(selectedFilterList.type!=='all'){
      isTypeValid = data.fund_type.toLowerCase() === selectedFilterList['type']
    }
    return isCategoryValid && isPlanValid && isTypeValid;
  })