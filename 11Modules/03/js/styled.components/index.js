const styled = {
    h1: function(styles) { // css styles as arguments in TitleStyled
        return function(content) {
            return `
                <h1 style="${styles}">
                    ${content}
                </h1>
            `
        }
    },
    h2: '',
    div: '',
}

export default styled