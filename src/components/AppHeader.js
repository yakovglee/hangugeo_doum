import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { Button, Layout, Typography } from "antd";

function AppHeader({ collapsed, setCollapsed, title }) {
    return (
        <Layout.Header
            style={{
                padding: 0,
                background: "white",
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                }}
            />
            <Typography.Title
                style={{
                    margin: 0,
                }}
                level={4}
            >
                {title}
            </Typography.Title>
        </Layout.Header>
    );
}

export default AppHeader;
