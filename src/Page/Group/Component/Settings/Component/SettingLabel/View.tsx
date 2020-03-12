import React, {ReactNode} from 'react';
import Style from './Style.module.scss';

interface IProps
{
    children: ReactNode
}

function InputLabel(props: Readonly<IProps>)
{
    const {children} = props;
    return (
        <div className={Style.InputLabel}>
            {children}
        </div>
    );
}

export default React.memo(InputLabel);