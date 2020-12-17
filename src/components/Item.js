import React, { useState, useEffect, useRef } from "react";
import {
    BottomPart,
    ItemInfo,
    StyledItem,
    StyledPrice,
    TopPart,
    ButtonItemStyles,
    NameStyles,
    DescriptionStyles,

} from "../styles/ItemStyles";
import { useLocation, Redirect } from "react-router-dom";
import { Image } from "antd";
import description from "./UtilsInfo";
import { fetchDataById, patchData } from "../CRUD";
import ProcessOfLoading from "./ProcessOfLoading";


const Item = () => {
    const [item, setItem] = useState({});
    const [redirect, setRedirect] = useState(false);

    const location = useLocation();
    const totalPrice = useRef(null);


    useEffect(() => {
        window.scrollTo(0, 0);

        const id = parseInt(location.search.split("=")[1]);
        fetchDataById(id)
            .then(([foundItem]) => {
                setItem(foundItem);
                patchData(foundItem);
            })
            .catch(() => {
                console.log("Elements failed");
            });
    }, []);

    useEffect(() => {
        if (item === undefined) {
            return;
        }
        totalPrice.current = item.price;
    }, [item]);


    if (Object.keys(item).length === 0) {
        return <ProcessOfLoading />;
    }

    return (
        <StyledItem>
            <TopPart>
                <Image src={item.imageOfPlayer} />
                <ItemInfo>
                    <NameStyles>{item.name}</NameStyles>

                    <DescriptionStyles>{description(item)}</DescriptionStyles>

                </ItemInfo>
            </TopPart>
            <BottomPart>
                <StyledPrice>Price: {item.price}  euro</StyledPrice>
                <ButtonItemStyles
                    onClick={() => setRedirect(true)}
                >
                    Return
                </ButtonItemStyles>
                {redirect && <Redirect push to="/catalog" />}
                <ButtonItemStyles>
                    Add
                </ButtonItemStyles>
            </BottomPart>
        </StyledItem>
    );
};

export default Item;
