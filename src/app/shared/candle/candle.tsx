"use client";

import Image from "next/image";

export interface CandleProps {
    name: string;
    src: string;
    price: string;
}

const Candle = ({ candle }: { candle: CandleProps }) => {
    const { name, src, price } = candle;

    return (
        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <Image
                        alt="Placeholder"
                        className="block h-auto w-full"
                        width={0}
                        height={0}
                        src={src}
                    />
                </a>

                <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                    <h1 className="text-lg">
                        <a
                            className="text-black no-underline hover:underline"
                            href="#"
                        >
                            {name}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">11/1/19</p>
                </header>

                <footer className="flex items-center justify-between p-2 leading-none md:p-4">
                    <a
                        className="flex items-center text-black no-underline hover:underline"
                        href="#"
                    >
                        <p className="ml-2 text-sm">{price}</p>
                    </a>
                    <a
                        className="text-grey-darker hover:text-red-dark no-underline"
                        href="#"
                    >
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>
            </article>
        </div>
    );
};

export default Candle;
