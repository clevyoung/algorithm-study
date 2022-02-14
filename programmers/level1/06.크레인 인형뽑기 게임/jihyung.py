def solution(boards, moves):
    removed_count = 0
    stack = []
    moves = [move-1 for move in moves]
    for move in moves:
        for row in boards:
            if row[move] != 0:
                stack.append(row[move])
                row[move] = 0
                break

        if len(stack) > 1:
            top = stack[-1]
            second = stack[-2]

            if top == second:
                stack.pop()
                stack.pop()
                removed_count += 2
    return removed_count


print(solution([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]))  # 4
