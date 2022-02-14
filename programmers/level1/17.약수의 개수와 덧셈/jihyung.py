def solution(left, right):
    answer = 0
    for num in range(left, right + 1):
        div_count = 0
        for div in range(1, num+1):
            if num % div == 0:
                div_count += 1

        if div_count % 2 == 0:
            answer += num
        else:
            answer -= num

    return answer


print(solution(13, 17))  # 43
