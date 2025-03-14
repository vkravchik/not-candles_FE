"use client";

import Candle, { CandleProps } from "@svarog/app/shared/candle/candle";
import { useState } from "react";

const Candles = () => {
    const [candles, setCandles] = useState<CandleProps[]>([
        {
            name: "Candle 1",
            src: "https://picsum.photos/600/600?random=1",
            price: "20",
        },
        {
            name: "Candle 2",
            src: "https://picsum.photos/600/600?random=1",
            price: "66",
        },
        {
            name: "Candle 3",
            src: "https://picsum.photos/600/600?random=1",
            price: "45",
        },
        {
            name: "Candle 4",
            src: "https://picsum.photos/600/600?random=1",
            price: "21",
        },
        {
            name: "Candle 5",
            src: "https://picsum.photos/600/600?random=1",
            price: "32",
        },
        {
            name: "Candle 6",
            src: "https://picsum.photos/600/600?random=1",
            price: "12",
        },
    ]);

    return (
        <div className="container mx-auto my-12 px-4 md:px-12">
            <div className="-mx-1 flex flex-wrap lg:-mx-4">
                {candles.map((candle) => (
                    <Candle key={candle.name} candle={candle} />
                ))}
            </div>
        </div>
    );
};

export default Candles;
