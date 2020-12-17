let data = [];

export const comparator = (a, b, numbers) => {
    switch (numbers) {
        case "highPrice":
            if (a.price > b.price) return -1;
            else if (a.price < b.price) return 1;
            else return 0;
    }
};

export const sortBy = (inputList, sortType) => {
    if (sortType === "default") {
        return [...data];
    }
    let result = inputList.sort((a, b) => comparator(a, b, sortType));
    return result;



};


export const executeFilters = (props, sourceList) => {
    data = sourceList;
    let inputList = [...data];
    inputList = sortBy(inputList, props.sortType);
    return inputList;
};
