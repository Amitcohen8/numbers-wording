

export const setQueue = (arr, item) => {
    if (arr.includes(item)) {
        const index = arr.indexOf(item)
        arr.splice(index, 1)
    }
    const newArr = [item, ...arr]

    return newArr

}


export const handleDelete = (arr,item) => {
const index = arr.findIndex(el=>el.num === item);
arr.splice(index,1)
return arr
}