const getFilersMap =(data)=>{
    const category = {};
    const type = {};
    const plan = {}
    data.forEach(fund => {
        category[fund.fund_category.toLowerCase()] = true;
        type[fund.fund_type.toLowerCase()] = true;
        plan[fund.plan.toLowerCase()] = true;
    });
    return {
        category: ['ALL'].concat(Object.keys(category)),
        type: ['ALL'].concat(Object.keys(type)),
        plan: ['ALL'].concat(Object.keys(plan)),
    }
}

export default getFilersMap;