function getAcceleration(obj) {
    if (obj.f !== undefined && obj.m !== undefined) {
        return obj.f / obj.m
    }
    if (obj.Δt !== undefined && obj.Δt !== undefined) {
        return obj.Δv / obj.Δt
    }
    if (obj.d !== undefined && obj.t !== undefined) {
        return 2 * obj.d / (obj.t * obj.t)
    }
    return "impossible"
}