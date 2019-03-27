import chartTest1 from '../chartTest1.vue';
import chartTest2 from '../chartTest2.vue';
import chartTest3 from '../chartTest3.vue';
import page from '../routers/page.vue';
import configPage from '../routers/configPage.vue';
console.log(chartTest1)
const routes = [
  { path: '/chartTest1', component: chartTest1 },
  { path: '/chartTest2', component: chartTest2 },
  { path: '/chartTest3', component: chartTest3 },
  { path: '/page', component: page },
  { path: '/configPage', component: configPage }
]
export default routes