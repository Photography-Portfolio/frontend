import { mount } from "@vue/test-utils";
import Discover from "@/views/Discover";

describe('Mounted App', () => {
    const wrapper = mount(Discover);
  
    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
