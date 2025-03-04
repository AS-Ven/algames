import { create } from 'zustand'

type State = {
    profile: boolean
}

type Action = {
    setProfile: () => void
}

export const useProfile = create<State & Action>((set) => ({
    profile: false,
    setProfile: () => set((state) => ({ profile: !state.profile })),
}))
