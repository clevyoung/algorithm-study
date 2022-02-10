def solution(student_count, lost_student, reserve_student):
    # 학생들의 체육복 기본 1개 설정
    student_uniform = [1] * (student_count + 2)

    # 체육복 추가로 가져온 학생 체육복 +1
    for r in reserve_student:
        student_uniform[r] += 1

    # 체육복 잃어버린 학생 체육복 - 1
    for l in lost_student:
        student_uniform[l] -= 1

    # 0번째, 마지막 항 0
    student_uniform[0] = 0
    student_uniform[-1] = 0

    for i in range(1, len(student_uniform)-1):
        if student_uniform[i] == 0 and student_uniform[i-1] >= 2:
            student_uniform[i] += 1
            student_uniform[i-1] -= 1
            continue

        if student_uniform[i] == 0 and student_uniform[i+1] >= 2:
            student_uniform[i] += 1
            student_uniform[i+1] -= 1
            continue

    return len([s for s in student_uniform if s != 0])


print(solution(5, [2, 4], [1, 3, 5]))  # 5
print(solution(5, [2, 4], [3]))  # 4


# 처음 풀이
def solution2(n, lost, reserve):
    students = [1 for i in range(n)]

    for i in range(len(lost)):
        students[lost[i]-1] -= 1

    for i in range(len(reserve)):
        students[reserve[i]-1] += 1

    for i in range(len(students)):
        try:
            if students[i] > 1 and students[i-1] == 0:
                students[i] -= 1
                students[i-1] += 1
                continue
            elif students[i] > 1 and students[i+1] == 0:
                students[i] -= 1
                students[i+1] += 1
                continue
            else:
                continue
        except:
            continue

    count = 0
    for i in range(len(students)):
        if students[i] >= 1:
            count += 1
            continue
    return count
