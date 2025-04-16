import { useState, useEffect } from "react";

export default function FlipCard({ chapter_name, translation }) {
    const [fullscreen, setFullscreen] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = () => {
        if (isMobile) {
            setFullscreen(true);
        } else {
            setFlipped(!flipped);
        }
    };

    return (
        <>
            <div
                className={`m-4 perspective transition-all duration-300 ease-in-out ${
                    fullscreen && isMobile
                        ? "fixed inset-0 z-50 bg-white animate-fade-in"
                        : "w-64 h-60"
                }`}
                onClick={handleClick}
            >
                {!fullscreen || !isMobile ? (
                    <div
                        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                            flipped ? "rotate-y-180" : ""
                        }`}
                    >
                        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-md p-4 flex items-center justify-center text-center">
                            <p className="text-sm font-semibold text-center w-full h-full flex justify-center items-center">
                                {chapter_name}
                            </p>
                        </div>

                        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-md p-4 overflow-auto flex flex-col justify-center items-center text-center">
                            <p className="text-xs sm:text-sm mb-4 text-center">
                                {translation}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-white p-6 overflow-auto">
                        <button
                            className="absolute top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                setFullscreen(false);
                            }}
                        >
                            Закрыть
                        </button>
                        <div className="mt-12 text-center text-base leading-relaxed">
                            {translation}
                        </div>
                    </div>
                )}
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
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </>
    );
}
