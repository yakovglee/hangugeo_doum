import { useState } from "react";

import AppSider from "./components/AppSider";
import FlipCard from "./components/FlipCard";

import { data } from "./data";

import { Layout, Flex } from "antd";
import AppHeader from "./components/AppHeader";
const { Content } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <AppSider collapsed={collapsed} />
            <Layout>
                <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
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
