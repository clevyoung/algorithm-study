def solution(nums):
    pick_count = len(nums)//2
    removed_double = list(set(nums))

    if len(removed_double) >= pick_count:
        return pick_count
    return len(removed_double)


print(solution([3, 3, 3, 2, 2, 4]))  # 3
