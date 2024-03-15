import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

import { useActiveSectionStore } from '@/stores/active-section-store'
import { TSectionName } from '@/types/utils.type'

type TUseSectionInView = {
  sectionName: TSectionName
  amount?: number | 'some' | 'all'
}

export function useSectionInView<T extends Element>({ sectionName, amount }: TUseSectionInView) {
  const ref = useRef<T>(null)
  const isInView = useInView(ref, { amount })

  const { setActiveSection, timeOfLastClick } = useActiveSectionStore()

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [isInView, sectionName, setActiveSection, timeOfLastClick])

  return ref
}
