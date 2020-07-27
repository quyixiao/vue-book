Vue.directive('clickoutside', {
    bind: function (el, binding, vnode) {
        function documentHandler(e) {

            if(el.contains(e.target)){

                return false;
            }
            // 在过虑了内部元素后，点击外面的任何区域应该执行用户表达式中的函数，所以
            if(binding.expression){
                // binding.value() 就是用来执行当前上下文methods 中指定的函数
                return binding.value(e);
            }

        }
        el.__vueClickOutSide__ = documentHandler;
        document.addEventListener('click',documentHandler);
    },
    unbind :function (el,binding) {
        document.removeEventListener('click',el.__vueClickOutSide__);
        delete el.__vueClickOutSide__;
    }
});