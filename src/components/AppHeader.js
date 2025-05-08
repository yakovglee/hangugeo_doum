import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { Button, Layout } from "antd";

function AppHeader({ collapsed, setCollapsed }) {
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
        </Layout.Header>
    );
}

export default AppHeader;
