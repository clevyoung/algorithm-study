from itertools import combinations
# python에서 제공하는 라이브러리
# list(combinations(items, 2))
# [('1', '2'), ('1', '3'), ('1', '4'), ('1', '5'),
# ('2', '3'), ('2', '4'), ('2', '5'), ('3', '4'), ('3', '5'), ('4', '5')]


def solution(nums):
    possible_num_combs = list(combinations(nums, 3))
    prime_count = 0
    for possible_num_comb in possible_num_combs:
        prime_flag = True

        # 라이브러리로 만든 조합의 합이 내가 원하는 소수여야 합니다.
        possible_prime_num = sum(possible_num_comb)

        # 찾은 숫자의 합이 소수인지 여부를 확인합니다.
        for i in range(2, possible_prime_num):
            if possible_prime_num % i == 0:
                prime_flag = False
                break

        # 소수라면?
        if prime_flag:
            prime_count += 1
    return prime_count
