import React from 'react';

interface ModalProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

export function Modal({ children, title, onClose }: ModalProps) {
    return (
        <>
            <div
                onClick={onClose}
                className="fixed bg-black/50 top-0 right-0 left-0 bottom-0 z-[3]"
            />
            <div className="items-center w-[500px] p-2 rounded bg-white fixed top-[20rem] ml-[35rem] xl:ml-[20rem] -translate-x-1/2 z-[4]">
                <h1 className="mb-2 text-[#3A4562] text-3xl font-bold">
                    {title}
                </h1>

                {children}
            </div>
        </>
    );
}
