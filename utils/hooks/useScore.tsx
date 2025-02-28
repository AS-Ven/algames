import { create } from 'zustand'

type State = {
    score: number
}

type Action = {
    addScore: (by: number) => void
    resetScore: () => void
}

export const useScore = create<State & Action>((set) => ({
    score: 0,
    addScore: (by: number) => set((state) => ({ score: state.score + by })),
    resetScore: () => set((state) => ({ score: state.score - state.score })),
}))
