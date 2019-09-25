
const ApiEndPoints = {
  exploreFunds:()=> `https://api.kuvera.in/api/v3/funds.json`,
  fundDetails:(fundCode)=> `https://api.kuvera.in/api/v3/funds/${fundCode}.json`,
};

export function fetchFunds() {
  return fetch(ApiEndPoints.exploreFunds(), {
    method: 'GET',
  });
}

export function fetchFundDetails(code) {
    return fetch(ApiEndPoints.fundDetails(code), {
      method: 'GET',
    });
  }