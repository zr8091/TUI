import Vue from 'vue'

const TPopover = Vue.directive('t-popover', {
  bind (el, binding, vnode) {
    console.log(vnode.context.$refs[binding.arg])
    let pop = vnode.context.$refs[binding.arg]
    if (el && pop) pop.setTriggerTarget(el)
    return el
  }
})

export default TPopover
