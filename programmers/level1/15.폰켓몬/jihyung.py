def solution(nums):
    pick_count = len(nums)//2
    removed_double = list(set(nums))

    if len(removed_double) >= pick_count:
        return pick_count
    return len(removed_double)


# min함수를 사용한 if문 제거 가능
def solution2(nums):
    pick_count = len(nums)//2
    removed_double = list(set(nums))
    return min(pick_count, len(removed_double))


print(solution([3, 3, 3, 2, 2, 4]))  # 3
