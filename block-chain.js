function blockChain(data , prev){
    if (prev == null){
        prev = { index: 0, hash: '0' }
    }
    const block = {
        index: prev.index + 1,
        data: data,
        Hash: hachCode(index + prev.hash + JSON.stringify(data)),
        prev: prev,
        chain:function(data , block){
            return blockChain('data', block)
        }

    }
    return block
}