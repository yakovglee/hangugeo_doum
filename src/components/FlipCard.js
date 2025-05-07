import { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

function FlipCard() {
    const [flipped, setFlipped] = useState(false);

    return (
        <>
            <div
                className="perspective w-[350px] h-[280px]"
                onClick={() => setFlipped(!flipped)}
            >
                <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                        flipped ? "rotate-y-180" : ""
                    }`}
                >
                    <div className="absolute w-full h-full backface-hidden">
                        <CardFront />
                    </div>
                    <div className="absolute w-full h-full backface-hidden rotate-y-180">
                        <CardBack />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective {
                    perspective: 1000px;
                }
                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </>
    );
}

export default FlipCard;
