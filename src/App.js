import FlipCard from "./components/FlipCard";

import { data } from "./data";

import { Layout, Menu, Flex } from "antd";
const { Content, Sider, Header } = Layout;

const items = [1, 2, 3, 4].map((icon, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));

function App() {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["4"]}
                    items={items}
                />
            </Sider>
            <Layout>
                <Content style={{ margin: "24px 16px 0" }}>
                    <Flex justify={'center'} align={'flex-start'} wrap gap="middle">
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                        <FlipCard />
                    </Flex>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
