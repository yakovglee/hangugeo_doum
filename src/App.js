import { useState } from "react";

import AppSider from "./components/AppSider";
import FlipCard from "./components/FlipCard";

import { data } from "./data";

import { Layout, Flex } from "antd";
import AppHeader from "./components/AppHeader";
const { Content } = Layout;

const itemsMenu = [
    {
        key: "grp",
        label: "연세 한국어 읽기",
        type: "group",
        children: [
            { key: "ys1", label: "Part 1", title: "연세 한국어 읽기 Part 1" },
            { key: "ys2", label: "Part 2", title: "연세 한국어 읽기 Part 2" },
        ],
    },
];
function App() {
    const [collapsed, setCollapsed] = useState(true);
    const [selectedKey, setselectedKey] = useState("ys1");
    const [title, setTitle] = useState("연세 한국어 읽기 Part 1");

    function handleSelect(item) {
        setselectedKey(item.key);
        setTitle(item.item.props.title);
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <AppSider
                collapsed={collapsed}
                selectedKey={selectedKey}
                handleSelect={handleSelect}
                items={itemsMenu}
            />
            <Layout>
                <AppHeader
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    title={title}
                />
                <Content style={{ margin: "24px 16px 0" }}>
                    <Flex
                        justify={"center"}
                        align={"flex-start"}
                        wrap
                        gap="middle"
                    >
                        {data.map((item, index) => (
                            <FlipCard key={index} data={item} />
                        ))}
                    </Flex>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
