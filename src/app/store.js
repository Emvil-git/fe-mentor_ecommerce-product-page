import create from 'zustand';

const appStore = (set) => ({
    cart: [],
    addToCart: (item) => {
        set((state) => ({
            cart: [item, ...state.cart],
        }))
    },
    removeFromCart: (itemId) => {
        set((state) => ({
            cart: state.cart.filter(item => item.itemId != itemId),
        }))
    },
    hasNotif: false,
    notifTrue: () => set({ hasNotif: true }),
    notifFalse: () => set({ hasNotif: false }),
})

const useAppStore = create(appStore);

export default useAppStore;