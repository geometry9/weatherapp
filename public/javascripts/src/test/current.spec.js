import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Current from '../components/Current';

describe('<Current/>', function () {
  it('should have weather prop', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.find('img')).to.have.length(1);
  });
  it('should at least have 1 data source', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.find('img')).to.have.length(1);
  });
  it('should calculate temperature', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined;
  });
});
