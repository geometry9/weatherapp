import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Current from '../components/Current';

describe('<Current/>', function () {

  it('should have a day or night class', function () {
    const wrapper = shallow(<Current />);
    expect(wrapper.find('current-weather').className).to.have.any.string('day', 'night');
  });

  it('should have weather prop', function () {
    const wrapper = mount(<Current />);
    expect(wrapper.props()[0].weather).to.be.defined;
  });

  it('should at least have 1 data source', function () {
    const wrapper = shallow(<Current />);
    expect(wrapper.props()[0].weather.length).to.be.above(0);
  });

});
