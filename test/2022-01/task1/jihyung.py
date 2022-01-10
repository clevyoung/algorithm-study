def solution(string):
    possible_combs = []
    for i in range(len(string)):
        # 현재 index의 숫자를 제외하고 양옆의 문자열을 합하여 새로운 문자열을 생성
        possible_comb = string[:i] + string[i+1:]
        possible_combs.append(possible_comb)

    # 생성된 문자열의 리스트를 크기순으로 정렬합니다.
    possible_combs.sort()
    return possible_combs[0]


print(solution("acb"))  # ab
print(solution("hot"))  # ho
print(solution("codility"))  # cdility
print(solution("aaaa"))  # aaa
