# 예전 풀이 => python의 zip을 사용해서 묶은후에 반복문 돌려서 구하기
def solution1(a, b):
    answer = 0
    zipped = list(zip(a, b))
    for i in range(len(zipped)):
        one_zip_mul = zipped[i][0] * zipped[i][1]
        answer += one_zip_mul
    return answer

# 현재 풀이 => 두 리스트의 길이가 같으므로 반복문 한번으로 같은 자리에 있는 값끼리 곱해서 더하기 가능


def solution2(left_nums, right_nums):
    answer = 0
    for i in range(len(left_nums)):
        answer += left_nums[i] * right_nums[i]
    return answer


print(solution([1, 2, 3, 4], [-3, -1, 0, 2]))  # answer : 3
print(solution2([-1, 0, 1], [1, 0, -1]))  # answer : -2
