def solution(numbers):
    a = set([i for i in range(10)])
    return sum(list(a - set(numbers)))


print(solution([1, 2, 3, 4, 6, 7, 8, 0]))  # 14
