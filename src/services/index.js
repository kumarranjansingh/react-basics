
const ApiEndPoints = {
  exploreFunds:()=> `https://jsonblob.com/5d210e6c-e025-11e9-a2ce-3f096ad369a3`,
  fundDetails:()=> `https://jsonblob.com/8cde6e94-e025-11e9-a2ce-11355300160f`,
};
// api can be develope to support dynamic code
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