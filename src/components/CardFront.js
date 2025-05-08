import { Typography } from "antd";
import Card from "./shr/Card";

export default function CardFront({ chapter_name, quizlet_link }) {
    return (
        <Card>
            <Typography.Title level={3}>{chapter_name}</Typography.Title>
            {quizlet_link && (
                <Typography.Link href={quizlet_link} target="_blank">
                    Quizlet
                </Typography.Link>
            )}
        </Card>
    );
}
