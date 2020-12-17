import React, {useState, useEffect, useContext} from "react";
import {Menu} from "antd";

import ElementsContext from "../components/Context";
import {CatalogState} from "../components/Source";
import {changeCatalogState, executeFilters, findBy} from "../components/Utils";
import ProcessOfLoading from "../components/ProcessOfLoading";
import ContainerItem from "../components/ContainerItem";
import {AutoCompleteStyles, MenuItemStyles, MenuStyles, ViewComponent} from "../styles/CatalogStyles";


const {SubMenu} = Menu;


const Catalog = () => {
    const {source} = useContext(ElementsContext);
    let data = source;
    const [selectedKeys, setSelectedKeys] = useState(Object.values(CatalogState));
    const [products, setProducts] = useState([...data]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setProducts(source);
    }, [source]);

    const handleInput = (sample) => {
        data = findBy(sample, source);
        setProducts(executeFilters(CatalogState, data));
    };

    const handleClick = (e) => {
        console.log(e);
        let CatalogState = changeCatalogState(e);
        setSelectedKeys(Object.values(CatalogState));
        setProducts(executeFilters(CatalogState, data));
    };

    const resetDefault = (e) => {
        let props = {
            key: "default",
            item: {props: {subMenuKey: e.item.props.subMenuKey}},
        };
        if (e.item.props.subMenuKey === "view-menu-") {
            props.key = "card";
        }
        handleClick(props);
    };

    console.log(products);
    return (
        <ViewComponent>
            <MenuStyles
                multiple
                onSelect={handleClick}
                onDeselect={resetDefault}
                selectedKeys={selectedKeys}
                mode="horizontal"
            >
                <SubMenu
                    key="sort"
                    title="Sort by"
                >
                    <Menu.Item key="highPrice">The highest price</Menu.Item>

                </SubMenu>

                <MenuItemStyles key="search">
                    <AutoCompleteStyles
                        style={{width: 200}}
                        placeholder="Search"
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                            -1
                        }
                        onSearch={handleInput}
                    />
                </MenuItemStyles>
            </MenuStyles>
            {products.length !== 0 ? (
                <ContainerItem products={products} currentView={CatalogState.currentView}/>
            ) : (
                <ProcessOfLoading/>
            )}
        </ViewComponent>
    );
};

export default Catalog;
