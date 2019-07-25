import React, { Children } from 'react';
import { MemoryRouter } from "react-router-dom"
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import Landing from '../components/Landing'


describe('<Landing />', () => {

    it('exists', () => {
        const componentToTest = <Landing/>;

        const wrapper = mount(<MemoryRouter>{componentToTest}</MemoryRouter>);
        expect(wrapper).toExist
    })

})

// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Landing />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
  