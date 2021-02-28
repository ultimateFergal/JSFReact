import { makeIcecream } from './icecream-machine.js'

const $flavors = document.querySelectorAll('.flavor') // $ grupo de elementos html

    console.log($flavors) // Nodelist, these are not arrays
    $flavors.forEach(($el) => $el.addEventListener('click', selectFlavor))
    function selectFlavor() {
        this.classList.toggle('is-active') // 'this' aims or reference to element classList from $flavors
    }


    window.btn.addEventListener('click', () => {
        const $flavors = document.querySelectorAll('.flavor.is-active')// nodeList
        console.log($flavors, 'btn')
        try {            
            makeIcecream($flavors[0], $flavors[1])
        } catch (error) {
            alert(`Aún no completas los sabores para preparar tu helado`)
        }
   })