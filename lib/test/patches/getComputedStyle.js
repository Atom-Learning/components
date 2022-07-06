const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)
