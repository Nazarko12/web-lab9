import React from "react";
import {
    HeadingContainer,
    FunctionalMenu,
    Header,
} from "../styles/HeadingStyles";
import Clock from "./HeadingImage";

const Heading = () => {
    return (
        <HeadingContainer>
            <Clock/>
            <FunctionalMenu>
                <Header>A possible transfer of Ukrainian player for MU!
                    <p> Talented <q> Dynamo </q> defender Vitaliy Mykolenko could join <q> Manchester United </q>.
                        But Kyiv did not like the amount offered by the British for the young player.
                        The English club offered <q> Dynamo </q> bosses to hire a defender with a mandatory right of
                        redemption.
                        It is not yet reported how much <q> Manchester United </q> were willing to pay for Mykolenko,
                        but the amount seems to have been very substantial.
                        The leadership of Kyiv wants to raise about 40 million euros for a key defense player.
                        The British did not want to pay such a crazy amount. Therefore, they were refused.
                        This season, Mykolenko played 11 matches in a "blue and white" T-shirt, in which he twice
                        assisted his teammates.
                        Recently, there was information that the football giant <q> Milan </q> became seriously
                        interested in the footballer.
                        The Italians continue to closely monitor the game of the 21-year-old defender.
                        We will add that Mykolenko made his debut for the adult <q> Dynamo </q> team in the summer of
                        2017 and almost immediately began to show his best qualities.
                        Thanks to a good game in 2018, he deserved a call to the national team of Ukraine from Andriy
                        Shevchenko..</p>
                </Header>
            </FunctionalMenu>
        </HeadingContainer>
    );
};

export default Heading;
