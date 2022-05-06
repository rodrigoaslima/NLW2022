import { useState } from 'react';
import { CloseButton } from '../../CloseButton/Index';

import { FeedBackType, feedbackTypes } from '../Index';

interface FeedbackTypeStepProps{
    onFeedbackTypeChanged: (type: FeedBackType) =>void;
}


export function FeedbackTypeStep({onFeedbackTypeChanged}:FeedbackTypeStepProps ){
    const [ feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);

    return(
        <>
            <header>
                <span className='text'>Deixe seu feedback</span>

                <CloseButton />

            </header>

            <div className='flex py-8 gap-2 w-full'>
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return(
                        <button
                            className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col 
                                    items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 
                                    focus:outline-none'
                                onClick={() => onFeedbackTypeChanged(key as FeedBackType)}
                                type='button'
                                key={key}
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        
        </>
        
    )
}