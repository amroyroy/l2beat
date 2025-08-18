import { ProjectId, UnixTime } from '@l2beat/shared-pure'
import type { ScalingProject } from '../../internalTypes'
import { underReviewL3 } from '../../templates/underReview'

export const ouroboro: ScalingProject = underReviewL3({
  hostChain: ProjectId('arbitrum'),
  id: ProjectId('ouroboro'),
  capability: 'universal',
  addedAt: UnixTime(1755482259),
  display: {
    category: 'Optimium',
    stacks: ['Arbitrum'],
    name: 'Ouroboro',
    slug: 'ouroboro',
    description:
      'Ouroboro is an Orbit stack Layer 3 optimium designed specifically for game makers and players.',
    purposes: ['Gaming'],
    links: {
      websites: ['https://ouroboro.org/'],
      explorers: ['https://explorer.ouroboro.org'],
      socialMedia: [
        'https://x.com/OuroboroL3',
        'https://linkedin.com/company/ouroborolabs/',
      ],
    },
  },
  ecosystemInfo: {
    id: ProjectId('arbitrum-orbit'),
  },
})
