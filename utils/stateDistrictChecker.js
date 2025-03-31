import { createReadStream } from "fs";
// import { createInterface } from "readline";

const readJSONFile = async (filePath) => {
    return new Promise((resolve, reject) => {
        let jsonData = "";

        const stream = createReadStream(filePath, { encoding: "utf8" });

        stream.on("data", (chunk) => {
            jsonData += chunk;
        });

        stream.on("end", () => {
            try {
                resolve(JSON.parse(jsonData));
            } catch (error) {
                reject(error);
            }
        });

        stream.on("error", (error) => reject(error));
    });
};

const districtsData = await readJSONFile(new URL("../assets/districts.json", import.meta.url));

export const isValidStateAndDistrict = (state, district) => {
    const stateData = districtsData.states.find(s => s.state === state);
    return stateData && stateData.districts.includes(district);
};
