import React from 'react'


export function PrimaryButton(prop){
    return(
        <>
            <button className="bg-primary
                text-secondary
                flex   
                justify-center
                items-center
                text-base
                w-32
                px-2
                pt-2
                pb-3
                rounded-lg">{prop.name}
                
            </button>
        </>
    )
}

export function SecondaryButton(prop){
    return(
        <>
            <button className="border-secondary
                border-2
                text-secondary
                flex   
                justify-center
                items-center
                text-base
                w-32
                px-2
                pt-2
                pb-3
                rounded-lg">{prop.name}
                
            </button>
        </>
    )
}


