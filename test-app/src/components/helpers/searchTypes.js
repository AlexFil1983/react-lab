export function typeOptions(types) {
    const typesOpt = Object.assign({}, types);
    let typeOptionsResult = [];
    for (let item in typesOpt) {
        if (typesOpt[item]) {
            typeOptionsResult.push(item)
       }

}
return typeOptionsResult.join(',');
}