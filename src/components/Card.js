import React, {useState} from "react";
import {
    Footer,
    CardStyles,
    ButtonStyles,
    CardImage,
    MetaStyles,
    TextStyles,
    MoreInfo,
    ButtonLessStyles,
} from "../styles/CardStyles";
import {useHistory} from "react-router-dom";
import description from "./UtilsInfo";

const Card = ({player}) => {
    return (
        <div>
            <CardStyles
                hoverable
                cover={<CardImage alt="Player" src={player.imageOfPlayer}/>}
            >
                <Footer>
                    <MetaStyles title={player.name}/>
                    <TextStyles>Price: {player.price} euro</TextStyles>
                    <AllInfo player={player}/>
                </Footer>
            </CardStyles>
        </div>
    );
};

export default Card;

const AllInfo = ({player}) => {
    const [visible, setVisible] = useState(false);

    let history = useHistory();

    return (
        <div>
            <ButtonStyles onClick={() => setVisible(true)}>View More</ButtonStyles>
            <MoreInfo height={visible ? 1 : 0}>
                <MetaStyles name={player.name} description={description(player)}/>
                <ButtonStyles
                    onClick={() => {
                        history.push(`/item?id=${player.id}`);
                    }}
                >
                    Open
                </ButtonStyles>
                <ButtonLessStyles
                    onClick={() => {
                        setVisible(false);
                    }}
                >
                    Hidden
                </ButtonLessStyles>
            </MoreInfo>
        </div>
    );
};
