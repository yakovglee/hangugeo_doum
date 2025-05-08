import { Card } from "antd";

function CardCustom({ children }) {
    return (
        <>
            <Card
                className="h-full min-w-fit max-h-full max-w-full rounded-[36px] shadow-xl flex items-center justify-center text-center"
                styles={{
                    body: {
                        maxHeight: "100%",
                        overflow: "auto",
                        width: "100%",
                    },
                }}
            >
                {children}
            </Card>
        </>
    );
}

export default CardCustom;
