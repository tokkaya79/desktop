import React from 'react';
import { ReactComponent as Save } from '../images/save.svg';

export function Saved() {
    const [saved, setSaved] = React.useState(false);

    const fillSave = saved ? 'fill-grey' : 'fill-white';
    const saveClasses = ['w-4 h-5 cursor-pointer', fillSave];

    return (
        <Save
            onClick={() => setSaved((prev) => !prev)}
            className={saveClasses.join(' ')}
        />
    );
}
