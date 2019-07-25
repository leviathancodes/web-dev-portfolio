import React, { Children } from 'react';
import { MemoryRouter } from "react-router-dom"
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import Landing from '../components/Landing'


describe('<Landing />', () => {

    it('home wrapper exists', () => {
        const componentToTest = <Landing/>;

        const wrapper = mount(<MemoryRouter>{componentToTest}</MemoryRouter>);
        expect(wrapper.exists('.home')).toEqual(true)
    })

    it('has an image element on desktop', () => {
        const componentToTest = <Landing/>
        const wrapper = mount(<MemoryRouter>{componentToTest}</MemoryRouter>);
        const el = wrapper.find('img')

        global.innerWidth = 2024
        global.dispatchEvent(new Event('resize'));

        expect(el).toBeTruthy()
    })
    // it('does not render the image on mobile', () => {
    //     const componentToTest = <Landing/>
    //     const wrapper = mount(<MemoryRouter>{componentToTest}</MemoryRouter>);
    //     const el = wrapper.find('img')

    //     global.innerWidth = 999
    //     global.dispatchEvent(new Event('resize'));

    //     expect(wrapper.find('img')).toBeUndefined()
    // })
})

// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Landing />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
  