function multiplicar (X: number, Y: number) {
    basic.showNumber(X * Y)
}
let Y = 0
let X = 0
X = 0
Y = 0
basic.forever(function () {
    X += randint(0, 10)
    basic.showNumber(X)
    basic.pause(500)
    Y += randint(0, 10)
    basic.showNumber(Y)
    multiplicar(X, Y)
})
