export const SORT_DIR = ['ASC', 'DSC'];
export const SORT_TYPE = ['alphaNumeric', 'number'];
export const COLUMN_KEYS = [
  'name',
  'fund_category',
  'fund_type',
  'plan',
  'returns.year_1',
  'returns.year_3'
];

export const sortFunds = (data, sortOnColNo, dir, type) => {
  if (type === SORT_TYPE[1]) {
    data.sort((a, b) => {
      if (dir === SORT_DIR[0]) {
        const currentKey = COLUMN_KEYS[sortOnColNo];
        if (currentKey.split('.')[0] === 'returns') {
          return (
            Number(a.returns[currentKey.split('.')[1]]) -
            Number(b.returns[currentKey.split('.')[1]])
          );
        } else {
          return (
            Number(a[currentKey.split('.')[1]]) -
            Number(b[currentKey.split('.')[1]])
          );
        }
      } else {
        const currentKey = COLUMN_KEYS[sortOnColNo];
        if (currentKey.split('.')[0] === 'returns') {
            return (
                Number(b.returns[currentKey.split('.')[1]]) -
                Number(a.returns[currentKey.split('.')[1]])
              );
        } else {
            return (
                Number(b[currentKey.split('.')[1]]) -
                Number(a[currentKey.split('.')[1]])
              );
        }
      }
    });
  } else if (dir === SORT_DIR[0]) {
    data.sort((a, b) => {
      if (a[COLUMN_KEYS[sortOnColNo]] > b[COLUMN_KEYS[sortOnColNo]]) {
        return 1;
      }
      if (a[COLUMN_KEYS[sortOnColNo]] < b[COLUMN_KEYS[sortOnColNo]]) {
        return -1;
      }
      return 0;
    });
  } else {
    data.sort((a, b) => {
      if (a[COLUMN_KEYS[sortOnColNo]] > b[COLUMN_KEYS[sortOnColNo]]) {
        return -1;
      }
      if (a[COLUMN_KEYS[sortOnColNo]] < b[COLUMN_KEYS[sortOnColNo]]) {
        return 1;
      }
      return 0;
    });
  }
  return data;
};
