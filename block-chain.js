function blockChain(data , prev){
    if (prev == null){
        prev = { index: 0, hash: '0' }
    }
    const index = prev.index + 1
    const block = {
        index: index,
        data: data,
        hash: hachCode(index + prev.hash + JSON.stringify(data)),
        prev: prev,
        chain:function(newData){
            return blockChain(newData, block)
        }

    }
    return block
}