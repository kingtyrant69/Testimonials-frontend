import { create } from 'zustand';

const useSpaceSetting = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useSpaceSetting;
