import React from "react";
import { HeaderComponent } from '../components';

export const LayoutComponent = ({children}) => {
    return (
        <div>
            <div style={{marginBottom: '32px'}}>
                <HeaderComponent />
            </div>
            <div>{children}</div>
        </div>
    )
}
