import districtsData from "../assets/districts.json" assert { type: "json" };

export const isValidStateAndDistrict = (state, district) => {
    const stateData = districtsData.states.find(s => s.state === state);
    return stateData && stateData.districts.includes(district);
};
