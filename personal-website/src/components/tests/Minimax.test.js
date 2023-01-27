import { minimax, MAXIMIZER } from "../Minimax"

test('State 1', () => {
    const state = ["O", "X", "X", null, "X", null, null, "O", "O"]
    const obj = minimax(state, MAXIMIZER)
    expect(obj).toStrictEqual(
        {
            score: 10,
            spotToMove: 6
        }
    )
})

test('State 2', () => {
    const state = ["O", "X", null, "O", "X", null, null, null, null]
    const obj = minimax(state, MAXIMIZER)
    expect(obj).toStrictEqual(
        {
            score: 10,
            spotToMove: 6
        }
    )
})

test('State 3', () => {
    const state = ["O", "O", null, "X", "X", null, "X", null, null]
    const obj = minimax(state, MAXIMIZER)
    expect(obj).toStrictEqual(
        {
            score: 10,
            spotToMove: 2
        }
    )
})

test('State 6, SHOULD Win!', () => {
    const state = ["O", "X", null, "O", "X", null, null, null, null]
    const obj = minimax(state, MAXIMIZER)
    expect(obj).toStrictEqual(
        {
            score: 10,
            spotToMove: 6
        }
    )
})

test('State 7, SHOULD Win!', () => {
    const state = ["X", null, null, "X", "O", null, "O", "X", null]
    const obj = minimax(state, MAXIMIZER)
    expect(obj).toStrictEqual(
        {
            score: 10,
            spotToMove: 2
        }
    )
})
