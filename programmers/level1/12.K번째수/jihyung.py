def solution1(array, commands):
    answer = []
    for i in range(len(commands)):
        # start, end, 선택할 idx를 미리 정의함
        start = commands[i][0] - 1
        end = commands[i][1]
        idx = commands[i][2] - 1

        after = array[start:end]
        after.sort()
        answer.append(after[idx])

    return answer


def solution2(array, commands):
    answers = []
    for command in commands:
        # 따로 위치 정의 없이 인덱스로 접근한후에 나온 수로 그대로 슬라이싱
        sliced_array = array[command[0]-1:command[1]]
        sliced_array.sort()
        answers.append(sliced_array[command[2]-1])
    return answers
