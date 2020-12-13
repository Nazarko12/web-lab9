let data = [];

export const comparator = (a, b, standard) => {
    switch (standard) {
        case "highPrice":
            if (a.price_in_mln_euro > b.price_in_mln_euro) return -1;
            else if (a.price_in_mln_euro < b.price_in_mln_euro) return 1;
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
