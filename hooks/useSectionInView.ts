import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

import { useActiveSectionStore, setActiveSection } from '@/stores/active-section-store'
import { TSectionName } from '@/types/utils.type'

type TUseSectionInView = {
  sectionName: TSectionName
  amount?: number | 'some' | 'all'
  once?: boolean
}

export function useSectionInView<T extends Element>({ sectionName, amount, once }: TUseSectionInView) {
  const ref = useRef<T>(null)
  const isInView = useInView(ref, { amount, once })

  const timeOfLastClick = useActiveSectionStore((state) => state.timeOfLastClick)

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [isInView, sectionName, timeOfLastClick])

  return { ref, isInView }
}
