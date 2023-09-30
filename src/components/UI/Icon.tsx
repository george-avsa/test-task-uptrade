import { FC } from "react";

interface IconInput {
    children: React.ReactNode
    circle?: boolean
}

const Icon = ({children, circle=false}: IconInput) => {
    return (
        <div className={`icon ${circle ? 'icon--circle' : ''}`}>
            {children}
        </div>
    );
}

export default Icon;