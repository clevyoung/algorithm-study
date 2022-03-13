def solution(absolutes, signs):
    answer = 0
    for i in range(len(absolutes)):
        # i번째값이 True일 경우 +
        if signs[i]:
            answer += absolutes[i]
        # i번째값이 False일 경우 -
        else:
            answer -= absolutes[i]

    return answer


print(solution([4, 7, 12], [True, False, True]))  # answer : 9
