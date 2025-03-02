import { create } from 'zustand'

type State = {
    connection: boolean
}

type Action = {
    setConnection: () => void
}

export const useConnection = create<State & Action>((set) => ({
    connection: false,
    setConnection: () => set((state) => ({ connection: !state.connection })),
}))
