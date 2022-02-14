def solution(answers):
    sol_1 = [1, 2, 3, 4, 5]
    sol_2 = [2, 1, 2, 3, 2, 4, 2, 5]
    sol_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    scores = [0, 0, 0]
    answer = []

    for i in range(len(answers)):
        if answers[i] == sol_1[i % (len(sol_1))]:
            scores[0] += 1

        if answers[i] == sol_2[i % (len(sol_2))]:
            scores[1] += 1

        if answers[i] == sol_3[i % (len(sol_3))]:
            scores[2] += 1

    for i, v in enumerate(scores):
        if v == max(scores):
            answer.append(i+1)
    return answer
