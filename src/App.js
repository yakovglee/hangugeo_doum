import { useState, useEffect } from "react";

import AppSider from "./components/AppSider";
import FlipCard from "./components/FlipCard";
import AppHeader from "./components/AppHeader";
import CustomIcon from "./components/CustomIcon";

import { itemsMenu } from "./data";

import { Layout, Flex, Spin, Alert } from "antd";

const { Content } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(true);
    const [selectedKey, setselectedKey] = useState("ys1");
    const [title, setTitle] = useState("연세 한국어 읽기 Part 1");

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const webAppUrl =
        "https://script.google.com/macros/s/AKfycbygxUSpYtAFnfZzROwXEGLViz3drbOzy2ss_j6xlwz_TDmnyPk8SQjIF3wbL4QY37a4/exec";

    function handleSelect(item) {
        setselectedKey(item.key);
        setTitle(item.item.props.title);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(webAppUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        };

        fetchData();
    }, [webAppUrl]);

    if (loading) {
        return (
            <Spin
                indicator={<CustomIcon spin />}
                size="large"
                tip="Загрузка данных"
                fullscreen
            />
        );
    }

    if (error) {
        return (
            <Spin tip="Loading...">
                <Alert
                    message="Ошибка"
                    description={error.message}
                    type="error"
                />
            </Spin>
        );
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
                        {data
                            .filter((item) => item.book === selectedKey)
                            .map((item, index) => (
                                <FlipCard key={index} data={item} />
                            ))}
                    </Flex>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
