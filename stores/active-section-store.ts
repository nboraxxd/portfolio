import { create } from 'zustand'

import { TSectionName } from '@/types/utils.type'

type TActiveSectionStore = {
  activeSection: TSectionName
  timeOfLastClick: number
}

const initialState: TActiveSectionStore = { activeSection: 'Home', timeOfLastClick: 0 }

export const useActiveSectionStore = create<TActiveSectionStore>()(() => initialState)

export const setActiveSection = (activeSection: TSectionName) => {
  useActiveSectionStore.setState({ activeSection })
}

export const setTimeOfLastClick = (timeOfLastClick: number) => {
  useActiveSectionStore.setState({ timeOfLastClick })
}
