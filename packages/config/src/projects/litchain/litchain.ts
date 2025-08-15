import { ProjectId, UnixTime } from '@l2beat/shared-pure'
import type { ScalingProject } from '../../internalTypes'
import { underReviewL3 } from '../../templates/underReview'

export const litchain: ScalingProject = underReviewL3({
  id: 'litchain',
  capability: 'universal',
  addedAt: UnixTime(1755235461),
  hostChain: ProjectId('arbitrum'),
  display: {
    name: 'Lit Chain',
    slug: 'litchain',
    description:
      'Lit Chain is the decentralized network for managing keys and secrets. Join the builders using programmable signing and encryption to power AI agents, blockchain interoperability, crypto wallets, and user-owned data.',
    purposes: ['AI'],
    category: 'Optimium',
    stacks: ['Arbitrum'],
    links: {
      websites: ['https://litprotocol.com/'],
      explorers: ['https://lit-chain-explorer.litprotocol.com'],
      documentation: ['https://developer.litprotocol.com/'],
      repositories: ['https://github.com/LIT-Protocol'],
      socialMedia: [
        'https://twitter.com/litprotocol',
        'https://t.me/+aa73FAF9Vp82ZjJh',
        'https://discord.com/invite/zBw5hDZve8',
        'https://linkedin.com/company/lit-protocol',
      ],
    },
  },
  ecosystemInfo: {
    id: ProjectId('arbitrum-orbit'),
  },
})
