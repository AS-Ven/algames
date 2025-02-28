import { create } from 'zustand'

type State = {
    clock: number
}

type Action = {
    setClock: (seconds: number) => void
}

export const useClock = create<State & Action>((set) => ({
    clock: 0,
    setClock: (seconds: number) => set(() => ({ clock: seconds })),
}))
