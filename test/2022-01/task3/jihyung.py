def solution(numbers):
    possible_sum = []
    for i in range(len(numbers)):
        for j in range(i+1, len(numbers)):
            # 선택한 숫자의 자릿수별 합
            left_num_sum = sum(list(map(int, str(numbers[i]))))
            right_num_sum = sum(list(map(int, str(numbers[j]))))

            # 합이 같을 경우 선택가능한 숫자들입니다. 값을 더해서 possible_sum에 넣어줍니다.
            if left_num_sum == right_num_sum:
                possible_sum.append(numbers[i] + numbers[j])

    possible_sum.sort()

    # possible_sum에 값이 들어있을 경우 가장 뒤의 값을 리턴, 없을경우 -1을 리턴합니다.
    if possible_sum:
        return possible_sum[-1]
    else:
        return -1


print(solution([51, 71, 17, 42]))  # 93
print(solution([42, 33, 60]))  # 102
print(solution([51, 32, 43]))  # -1
