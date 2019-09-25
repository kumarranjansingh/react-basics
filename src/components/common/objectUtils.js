export const isObject = item => (item && typeof item === 'object' && !Array.isArray(item));
export const isArray = item => (item && Array.isArray(item));
export const deepClone = (target) => {
    if (!target) { return target; }
  
    let result;
    if (isArray(target)) {
      result = [];
      target.forEach((child, index) => {
        result[index] = deepClone(child);
      });
    } else if (isObject(target)) {
      result = {};
      Object.keys(target).forEach((key) => {
        result[key] = deepClone(target[key]);
      });
    } else {
      result = target;
    }
  
    return result;
  };