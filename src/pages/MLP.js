import { useEffect, useState } from "react";
import { getReq } from "../services/api";

const MLP = () => {
    const [userData, setUserData] = useState()
    useEffect(() => {
        let fetchData = async () => {
        const data = await getReq('books/all');
        if (data) {
            setUserData(data.data)
        }
        }
        fetchData()
    }, [])
    // console.log(userData)
    return (
        <h1>
            YOYO
        </h1>
    )
}

export default MLP