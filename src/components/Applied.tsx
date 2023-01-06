import React from 'react';

import { Modal } from './Modal';
import { SendApply } from './SendApply';

export function Applied() {
    const [modal, setModal] = React.useState(false);

    return (
        <>
            {modal && (
                <Modal
                    title="Please enter your email"
                    onClose={() => setModal(false)}
                >
                    <SendApply onSend={() => setModal(false)} />
                </Modal>
            )}
            <button
                onClick={() => setModal(true)}
                className="uppercase py-4 px-5 bg-[#384564] text-white rounded text-xs mb-8"
            >
                Apply now
            </button>
        </>
    );
}
