def solution(N, stages):
    stages.sort()
    answers = []
    for stage_level in range(1, N+1):
        try_count = 0
        fail_count = 0
        for stage in stages:
            if stage_level <= stage:
                try_count += 1

            if stage_level == stage:
                fail_count += 1

        if fail_count:
            answers.append([stage_level, fail_count / try_count])
        else:
            answers.append([stage_level, 0])

    sorted_answers = sorted(answers, key=lambda x: x[1], reverse=True)
    return [s[0] for s in sorted_answers]


print(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))  # [3,4,2,1,5]
