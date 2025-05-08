import { Typography } from "antd";
import Card from "./shr/Card";

export default function CardBack({ translation, chapter_translation }) {
    return (
        <Card>
            <Typography.Title level={4}>{chapter_translation}</Typography.Title>
            <Typography.Text>{translation}</Typography.Text>
        </Card>
    );
}
