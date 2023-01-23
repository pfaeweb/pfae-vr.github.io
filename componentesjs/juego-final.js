window.addEventListener('load', initScene)

const peces = [
    { x: 0, y: 0, z: -30 },
    { x: 0, y: 0, z: 30 },
    { x: 30, y: 0, z: 0 },
    { x: -30, y: 0, z: 0 },
    { x: 20, y: 0, z: 20 },
    { x: 20, y: 0, z: -20 },
    { x: -20, y: 0, z: -20 },
    { x: -20, y: 0, z: 20 }
]

let pez, score = 0

function initScene() {

    let orbits = document.querySelectorAll('.orbit')

    orbits.forEach(orbit => {

        peces.forEach(pos => {

            pez = document.createElement('a-entity')
            pez.setAttribute('geometry', { primitive: 'plane', height: 2, width: 4 })
            pez.setAttribute('material', { src: '#pez', alphaTest: 0.5 })
            pez.setAttribute('class', 'pez')
            pez.object3D.position.set(pos.x, pos.y, pos.z)

            pez.setAttribute('shootable', '')

            orbit.appendChild(pez)
        })
    })
}

// AFRAME.registerComponent('shootable', {
//     init: function () {
//         this.el.addEventListener('click', () => {
//             this.el.parentNode.removeChild(this.el)
//             document.querySelector('[text]').setAttribute('value', `${++score} / 12 viejas rescatadas`)
//             if (score === 12) {
//                 document.querySelectorAll("a-text")[0].setAttribute('opacity', "0.001")
//                 document.querySelectorAll("a-text")[1].setAttribute('opacity', "1")
//                 setTimeout(() => {
//                     location.href = "index.html";
//                 }, 5000);
//             }
//         })
//     }
// })

AFRAME.registerComponent('shootable', {
    init: function () {
        this.el.addEventListener('click', () => {
            this.el.parentNode.removeChild(this.el)
            document.querySelector('[text]').setAttribute('value', `${++score} / 12 viejas rescatadas`)
            if (score === 12) {
                document.querySelectorAll("a-text")[0].setAttribute('opacity', "0.001")
                document.querySelectorAll("a-text")[1].setAttribute('opacity', "1")
                document.querySelectorAll("a-text")[2].setAttribute('opacity', "1")

                for (let i = 5; i >= 0; i--) {
                    console.log(i);
                    setTimeout(function timer() {
                        document.querySelectorAll("a-text")[2].setAttribute('value', `volveras a la pantalla inicial en ${i} segundos`);
                        
                    }, i * 1000);
                }

               
            }
        })
    }
})