import React, {useContext, useEffect, useState} from "react";
import {
    ContainerCards,
    TitleStyles,
    ButtonStyles,
    CatalogContainer,
} from "../styles/HomeCatalogStyles";
import ContainerItem from "./ContainerItem";
import ElementsContext from "./Context";


const HomeCatalog = () => {
    const { source } = useContext(ElementsContext);
    useEffect(() => {
        setData(source.slice(0, 2));
    }, [source]);
    const [data, setData] = useState(source.slice(0, 2));
    const [isShowMore, setIsShowMore] = useState(false);

    const showMore = () => {
        setData(source);
        setIsShowMore(true);
    };

    const showLess = () => {
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        });
        console.log(window);

        setData(source.slice(0, 2));
        setIsShowMore(false);
    };


    return (
        <CatalogContainer>
            <TitleStyles>Choose a debutant from the list:</TitleStyles>
            <ContainerCards>
                <ContainerItem products={data} currentView="card"/>
            </ContainerCards>
            {!isShowMore && (
                <ButtonStyles onClick={() => showMore()}>View More</ButtonStyles>
            )}
            {isShowMore && <ButtonStyles onClick={showLess}>Collapse</ButtonStyles>}
        </CatalogContainer>
    );
};

export default HomeCatalog;
