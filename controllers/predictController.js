import axios from "axios";

const prediction = async (req,res)=>{
    console.log(req.body);
    try {
        const response = await axios.post("http://localhost:8000/predict_crop", req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Error forwarding request:", error.message);
        res.status(error.response?.status || 500).json({ error: error.message });
    }
}
export default prediction;