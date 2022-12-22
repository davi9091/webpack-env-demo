import React from 'react';
import {RegularComponent} from "./src/RegularComponent/RegularComponent";

const LazyOptionalComponent = React.lazy(() => import('./src/OptionalComponent/OptionalComponent'));

export default function App() {
    console.log(process.env.OPT, typeof process.env.OPT)
    return (
        <div>
            <h1>Webpack ENV var demo</h1>
            <h2>env.OPT === {process.env.OPT}</h2>
            {process.env.OPT === '1' ? <LazyOptionalComponent /> : null}
            <RegularComponent/>
        </div>
    )
}
