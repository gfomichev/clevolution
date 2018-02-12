function getByElement(array = Heroes, element) {
    var b = {};
    Object.keys(array).filter(hell => array[hell].element == element.toLowerCase()).forEach(el => {
        b[el] = a[el];
    })
    return b;
}
