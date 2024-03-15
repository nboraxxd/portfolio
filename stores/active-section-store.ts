import { create } from 'zustand'

import { TSection } from '@/types/utils.type'

type TActiveSectionStore = {
  activeSection: TSection
  setActiveSection: (activeSection: TSection) => void
  timeOfLastClick: number
  setTimeOfLastClick: (timeOfLastClick: number) => void
}

export const useActiveSectionStore = create<TActiveSectionStore>()((set) => ({
  activeSection: 'Home',
  setActiveSection: (activeSection) => set({ activeSection }),
  timeOfLastClick: 0,
  setTimeOfLastClick: (timeOfLastClick) => set({ timeOfLastClick }),
}))
