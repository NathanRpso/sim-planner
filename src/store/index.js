import { createStore } from 'vuex'
import wall from './modules/wall'
import screen from './modules/screen'
import projector from './modules/projector'
import golfer from './modules/golfer'
import monitor from './modules/monitor'
import env from './modules/env'
import enclosure from './modules/enclosure'

export default createStore({
  modules: { wall, screen, projector, golfer, monitor, env, enclosure },
})
