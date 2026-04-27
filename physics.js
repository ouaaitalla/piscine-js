function getAcceleration(obj) {
    if (obj.f !== undefined && obj.m !== undefined) {
        return obj.f / obj.m
    }
    if (obj.v !== undefined && obj.t !== undefined) {
        return obj.v / obj.t
    }
    if (obj.d !== undefined && obj.t !== undefined) {
        return 2 * obj.d / (obj.t * obj.t)
    }
    return "impossible"
}