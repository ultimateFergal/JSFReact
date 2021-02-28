
function component(strings, ...dynamicValues) {
    return function (props) {
        let newContent = strings.slice() // generates a copy of strings
        dynamicValues.forEach((value, index) => {
            newContent[index] += props[value] // 'ola' // props.message, props.name
        })
        return newContent.join('') // turns array into a string
        // return 'valor'
    }
}

export { component }