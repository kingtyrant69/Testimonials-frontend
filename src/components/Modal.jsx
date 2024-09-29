import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button.jsx';

const Modal = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    modalName
}) => {
    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        onClose();
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    }, [disabled, onSubmit]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className={`
                justify-center
                items-center
                flex    
                inset-0
                z-50
                absolute
                outline-none
                focus:outline-none
               ${(modalName==='space') ?'bg-blue-200 bg-opacity-100': 'bg-black bg-opacity-50'}
            `}>
                <div
                    className={`'
                    relative
                    w-full  
                    my-5
                    mx-auto
                    ${(modalName==='space')?'lg:max-w-5xl':'lg:max-w-lg'}
                    h-full  
                    lg:h-auto
                    '`}
                >
                    <div
                        className='
                            h-full
                            lg:h-auto
                            border-0
                            rounded-lg
                            shadow-lg
                            relative
                            flex
                            flex-col
                            w-full
                            bg-white
                            outline-none
                            focus:outline-none
                        '>
                        <div
                            className='
                            flex
                            items-center
                            justify-between
                            pt-10
                            px-10
                            pb-5
                            rounded-t
                            '
                        >
                            <h3 className='text-black text-3xl font-semibold'>{title}</h3>
                            <button
                                onClick={handleClose}
                                className='
                                p-1
                                ml-auto
                                border-0
                                hover:opacity-70
                                transition
                                text-black
                                '
                            >
                                <AiOutlineClose size={20} />
                            </button>
                        </div>
                        <div className='relative p-10 flex-auto'>
                            {body}
                        </div>
                        <div className='flex flex-col p-10'>
                            <Button
                                disabled={disabled}
                                label={actionLabel}
                                secondary
                                fullWidth
                                large
                                onClick={handleSubmit}
                            />
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    title: PropTypes.string,
    body: PropTypes.element,
    footer: PropTypes.element,
    actionLabel: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    modalName: PropTypes.string
};

export default Modal;
