import PropExample from "@/components/PropExample.vue"
import { mount } from '@vue/test-utils'

describe('PropExample.vue', () => {
    it('the component recives and show title and content props', () => {
        const wrapper = mount(PropExample, {
            props: {
                title: 'Hello World',
                content: 'Lorem ipsum'
            }
        })
        if(expect(wrapper.find('h3').exists())) {
            expect(wrapper.find('h3').text()).toBe('Hello World')
        }
        if(expect(wrapper.find('p').exists())) {
            expect(wrapper.find('p').text()).toBe('Lorem ipsum')
        }
    })
    it('the component show the counter value', async () => {
        const wrapper = mount(PropExample, {
            props: {
                title: 'Hello World',
                content: 'Lorem ipsum'
            }
        })
        await wrapper.find('button').trigger('click')
        expect(wrapper.emitted().clickMe[0][0]).toBe(1)
    })
})
