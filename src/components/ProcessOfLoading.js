import React, {useEffect, useState} from "react";
import LoadingElement from "./Downloading";
import {CenterContainer, MessegeInfo} from "../styles/ProcessOfLoadingStyles";

const ProcessOfLoading = ({
                         name = "error",
                     }) => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        let timeOfProcessing = setTimeout(() => {
            setLoad(true);
        }, 7000);
        console.log(load);
        return function cleanUp() {
            clearTimeout(timeOfProcessing);
        };
    }, []);
    if (!load) {
        return <LoadingElement/>;
    }
    return (
        <CenterContainer>
            <MessegeInfo>{name}</MessegeInfo>
        </CenterContainer>
    );
};

export default ProcessOfLoading;
