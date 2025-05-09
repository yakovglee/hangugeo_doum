import Icon from "@ant-design/icons";

import logo from "../logo512.png";

const LogoSvg = () => (
    <img src={logo} alt="Logo" />
);

const CustomIcon = (props) => <Icon component={LogoSvg} {...props} />;

export default CustomIcon;
