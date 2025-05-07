import { Card } from "antd";

function CardCustom({ children }) {
    return (
        <>
            <Card className="h-full min-w-fit rounded-[36px] shadow-xl flex items-center justify-center text-center">
                {children}
            </Card>
        </>
    );
}

export default CardCustom;
