//先引入mockjs模块
import Mock from 'mockjs';

//引入json数据
import banner from './banner.json';
import floor from './floor.json';
import list from './list.json';

//模拟首页大轮播图数据
Mock.mock("/mock/banner", {
    code: 200,
    data: banner
});
Mock.mock("/mock/floor", {
    code: 200,
    data: floor
})

Mock.mock("/mock/list", {
    code: 200,
    data: list
})