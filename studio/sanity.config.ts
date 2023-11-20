import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { Coin_King } from './schemas/coin_king'

export default defineConfig({
  name: 'default',
  title: 'cripto_coins',

  projectId: 'yfol1ok2',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: Coin_King,
  },
})
