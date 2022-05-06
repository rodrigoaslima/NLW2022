import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thougthImageUrl from '../../assets/thought.svg';

import './style.css'


export const feedbackTypes = {
    BUG: { 
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de um lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thougthImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

// Object.entries(feedbackTypes) => 
/**
 * [
 *   [BUG,{...}],
 *   [IDEA,{...}],
 *   [OTHER,{...}],
 * ]
 */

export type FeedBackType = keyof typeof feedbackTypes

export function WidgetForm(){
    const [ feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);
    const [feedbackSent, setFeedbackSent ] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return(
        <div className='container'> 
            {feedbackSent ? (
                <FeedbackSuccessStep
                onFeedbackRestartRequested={handleRestartFeedback}
                />
            ): (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep 
                            onFeedbackTypeChanged={setFeedbackType}
                        />
                    ): (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            

            <footer className='footerContainer'>
                Feito com ♥ pela <a className='linkText' href='https://rocketseat.com.br'>Rocketseat</a>
            </footer>
        </div>
    )
}