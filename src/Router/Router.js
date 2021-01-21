import Tongquan from '../Components/Tongquan.vue'
import Report from '../Components/Report.vue'
import Muahang from '../Components/Muahang.vue'
import CompList from '../Components/CompList.vue'
import Options from '../Components/Options.vue'
export const routes = [
    { path: '/', name: 'tongquan', component: Tongquan },
    { path: '/report', name: 'report', component: Report },
    { path: '/muahang', name: 'muahang', component: Muahang },
    { path: '/complist', name: 'complist', component: CompList },
    { path: '/options', name: 'options', component: Options },
]