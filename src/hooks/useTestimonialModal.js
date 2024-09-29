import { create } from 'zustand';

const useTestimonialModal = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useTestimonialModal;
