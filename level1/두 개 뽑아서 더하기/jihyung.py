def solution(numbers):
    possilbe_sum_numbers = set()
    for i in range(len(numbers)):
        for j in range(i+1, len(numbers)):
            possilbe_sum_numbers.add(numbers[i] + numbers[j])

    return sorted(list(possilbe_sum_numbers))


print(solution([2, 1, 3, 4, 1]))  # [2,3,4,5,6,7]
