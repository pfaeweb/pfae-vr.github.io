AFRAME.registerComponent("mylink", {
    init: function() {
        this.el.addEventListener("mouseenter", (e)=> {
            window.location = this.data.href;
        })
    }
})
