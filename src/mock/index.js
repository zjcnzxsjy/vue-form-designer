import Mock from 'mockjs';

import { checkboxMockData, radioMockData, selectMockData, cascaderMockData } from './data'

Mock.mock(/\/mock-data\/checkbox/, 'get', checkboxMockData);
Mock.mock(/\/mock-data\/radio/, 'get', radioMockData);
Mock.mock(/\/mock-data\/select/, 'get', selectMockData);
Mock.mock(/\/mock-data\/cascader/, 'get', cascaderMockData);

export default Mock;