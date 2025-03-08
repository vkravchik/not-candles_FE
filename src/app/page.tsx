"use client";

import Spinner from "@svarog/app/shared/spinner/spinner";
import Candles from "@svarog/app/components/candles/candles";
import Header from "@svarog/app/components/header/header";

const Home = () => {
    return (
        <section>
            <Header></Header>
            {/*<Spinner />*/}
            <Candles />
        </section>
    );
};

export default Home;
