import { create } from 'zustand'

import { TSectionName } from '@/types/utils.type'

type TActiveSectionStore = {
  activeSection: TSectionName
  setActiveSection: (activeSection: TSectionName) => void
  timeOfLastClick: number
  setTimeOfLastClick: (timeOfLastClick: number) => void
}

export const useActiveSectionStore = create<TActiveSectionStore>()((set) => ({
  activeSection: 'Home',
  setActiveSection: (activeSection) => set({ activeSection }),
  timeOfLastClick: 0,
  setTimeOfLastClick: (timeOfLastClick) => set({ timeOfLastClick }),
}))
