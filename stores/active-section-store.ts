import { create } from 'zustand'
import { links } from '@/lib/data'

type TSection = (typeof links)[number]['name'] | null

type TActiveSectionStore = {
  activeSection: TSection
  setActiveSection: (activeSection: TSection) => void
}

export const useActiveSectionStore = create<TActiveSectionStore>()((set) => ({
  activeSection: 'Home',
  setActiveSection: (activeSection) => set({ activeSection }),
}))
