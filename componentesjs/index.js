AFRAME.registerComponent("mylink", {
    init: function() {
        this.el.addEventListener("mouseenter", (e)=> {
            window.location = this.data.href;
        })
    }
})

AFRAME.registerComponent("setdisplay", {
    init: function() {
            this.el.addEventListener("mouseenter", (e)=> {
                this.el.parentNode.removeChild(document.querySelector('a-text'))
                this.el.parentNode.parentNode.removeChild(document.querySelector('a-image'))
                this.el.parentNode.parentNode.removeChild(document.querySelector('a-plane'))
            })
    }
})