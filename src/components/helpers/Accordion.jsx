
import { useState } from "react";

export default function Accordion({ init, title, des }) {
    const [collaps, setCollaps] = useState(init || false);
    const handler = () => {
        setCollaps(!collaps);
    };
    return (
        <div className={`s-accordion ${collaps?'active':''}`}>
            <div onClick={handler} className="s-accordion__h">
                <h3>{title}</h3>
                <span className="icon"></span>
            </div>
            {collaps && (
                <div className="s-accordion__b">
                    {des}
                </div>
            )}
        </div>
    );
}