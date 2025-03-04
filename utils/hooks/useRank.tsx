import { create } from 'zustand'

type State = {
    rank: boolean
}

type Action = {
    setRank: () => void
}

export const useRank = create<State & Action>((set) => ({
    rank: false,
    setRank: () => set((state) => ({ rank: !state.rank })),
}))
