import React from "react";
import {ImageStyles} from "../styles/HeadingImage.styled";
import photo1 from "../image/first_image.jpg";
import photo2 from "../image/tournament.jpg";
import photo3 from "../image/coach.jpg";


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { image_number: 1 };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ image_number: ((this.state.image_number + 1) % 3) + 1 });
    }

    render() {
        let photo;

        switch (this.state.image_number) {
            case 1:
                photo = photo1;
                break;
            case 2:
                photo = photo2;
                break;
            case 3:
                photo = photo3;
                break;
        }
        return <ImageStyles src={photo} />;
    }
}

export default Clock;
