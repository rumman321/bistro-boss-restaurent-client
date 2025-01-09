import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";

const UpdateItem = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <SectionTitle heading={"Update item"} subHeading={"Refresh Item"}></SectionTitle>
        </div>
    );
};

export default UpdateItem;