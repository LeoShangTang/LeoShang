import React from 'react';

const AppButton = ({ toggleOpen, Icon, appName }) => {
    return (
        <div>
            <button className="flex flex-col justify-center rounded-[10px] bg-transparent border-transparent" onClick={toggleOpen}>
                <Icon className="w-[100px] h-[100px]" />
            </button>
            <div className='text-white'>
                {appName}
            </div>
        </div>
    )
}

export default AppButton;