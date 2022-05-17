import Vue from 'vue'
import Vuex from 'vuex'

import demo from './modules/demo'
import boxAside from './modules/box-aside'
import boxHeader from './modules/box-header'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        demo,
        boxAside,
        boxHeader
    }
})