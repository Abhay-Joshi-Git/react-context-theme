import { useRef, useEffect } from 'react';
import ReactDom from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export function Modal({ children }) {
    const ref = useRef(null);
    if (!ref.current) {
        ref.current = document.createElement('div');
    }

    useEffect(() => {
        modalRoot.appendChild(ref.current);

        return () => {
            modalRoot.removeChild(ref.current);
        }
    }, [])

    return ReactDom.createPortal(children, ref.current);
}
