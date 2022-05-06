import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

import './style.css';

export function CloseButton(){
    return(
        <Popover.Button className="buttonStyle" title='Fechar formulário de feedback' >
            <X weight='bold' className='w-4 h4'/> 

        </Popover.Button>
    )
}