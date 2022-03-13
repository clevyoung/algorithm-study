import math
import re


def solution(dartResult):
    # 샷이 총 3번이기 때문에 이를 공백으로 구분한 리스트로 만듦
    shots = [""]
    for shot in dartResult:
        if shot.isdigit():
            if shots[-1] == "1":
                shots[-1] = "10"
                continue
            shots.append("")
            shots.append(shot)
        else:
            shots.append(shot)
    shots.pop(0)
    shots.pop(0)
    p = re.compile('(\d+)([SDT])([*#]?)')
    dart = p.findall(dartResult)
    print(dart)

    # 공백을 기준으로 던진경우가 나뉘어있기 때문에 이 위치를 찾아 리스트안에 넣어서 구분해줌
    partition_shots = []
    divide_indexes = []
    for i, v in enumerate(shots):
        if v == "":
            divide_indexes.append(i)
    partition_shots.append(shots[0:divide_indexes[0]])
    partition_shots.append(shots[divide_indexes[0]+1:divide_indexes[1]])
    partition_shots.append(shots[divide_indexes[1]+1:])

    shot_point = [0, 0, 0]
    for i in range(len(partition_shots)):
        for j in range(len(partition_shots[i])):
            if partition_shots[i][j].isdigit():
                shot_point[i] += int(partition_shots[i][j])
            else:
                # 숫자가 아닌 모든 경우를 if문으로 지정함, S일 경우는 1제곱이므로 없어도 상관X
                if partition_shots[i][j] == "D":
                    shot_point[i] = math.pow(shot_point[i], 2)
                elif partition_shots[i][j] == "T":
                    shot_point[i] = math.pow(shot_point[i], 3)
                elif partition_shots[i][j] == "*":
                    shot_point[i-1] *= 2
                    shot_point[i] *= 2
                elif partition_shots[i][j] == "#":
                    shot_point[i] *= -1
    return sum(shot_point)


print(solution("1S2D*3T"))  # 37 =>	11 * 2 + 22 * 2 + 33
