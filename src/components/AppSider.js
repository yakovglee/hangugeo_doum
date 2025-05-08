import { Layout, Menu } from "antd";

const items = [1, 2, 3, 4].map((icon, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));

function AppSider({ collapsed }) {
    return (
        <Layout.Sider
            breakpoint="lg"
            collapsedWidth="0"
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme="light"
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                insetInlineStart: 0,
                top: 0,
                bottom: 0,
                scrollbarWidth: "thin",
                scrollbarGutter: "stable",
            }}
        >
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={items}
            />
        </Layout.Sider>
    );
}

export default AppSider;
