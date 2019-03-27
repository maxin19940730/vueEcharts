import Mock from 'mockjs';
import { getString } from '../utils';

Mock.mock(/\/api\/chartData[\s\S]*?/, 'get',(options)=>require('./json/chartData')[getString(options.url).id]);
Mock.mock(/\/api\/pieData[\s\S]*?/, 'get',(options)=>require('./json/pieData')[getString(options.url).id]);
Mock.mock(/\/api\/dicData[\s\S]*?/, 'get',(options)=>require('./json/dicData')[getString(options.url).dic]);
// require('./json/lineData')
