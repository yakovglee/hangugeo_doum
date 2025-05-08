import { Layout, Menu } from "antd";

function AppSider({ collapsed, selectedItem, handleSelect, items }) {
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
                defaultSelectedKeys={[selectedItem]}
                items={items}
                onSelect={handleSelect}
            />
        </Layout.Sider>
    );
}

export default AppSider;
