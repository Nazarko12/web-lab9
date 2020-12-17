import the_first_player from "../image/player1.jpg";
import the_second_player from "../image/player2.jpg";
import the_third_player from "../image/player3.jpg";
import the_fourth_player from "../image/player4.jpg";


export const setImages = (initialData) => {
    initialData.forEach((item) => {
        switch (parseInt(item.image)) {
            case 1:
                item.imageOfPlayer = the_first_player;
                break;
            case 2:
                item.imageOfPlayer = the_second_player;
                break;
            case 3:
                item.imageOfPlayer = the_third_player;
                break;
            case 4:
                item.imageOfPlayer = the_fourth_player;
                break;
        }
    });
    console.log("check", initialData);
    return initialData;
};
