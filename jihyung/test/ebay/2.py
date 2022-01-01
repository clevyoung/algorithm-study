from collections import deque
from copy import copy


# def solution(stones, k):
#     queue = deque()
#     queue.append((stones, ""))
#     paths = []
#     while len(queue) > 0:
#         cur_stones, path = queue.popleft()
#         answer_stones = []

#         for stone in cur_stones:
#             if stone != 0:
#                 answer_stones.append(stone)
#         if len(answer_stones) == 1 and sum(answer_stones) == k:
#             paths.append(path)
#             continue

#         for picked_idx in range(len(cur_stones)):
#             changed_stones = copy(cur_stones)
#             changed_stones[picked_idx] += 1
#             if 0 in changed_stones:
#                 continue

#             changed_stones = [s - 1 for s in changed_stones]
#             changed_stones[picked_idx] += 1
#             queue.append((changed_stones, path + str(picked_idx)))

#     if len(paths) > 0:
#         return paths[-1]
#     else:
#         return "-1"


# # print(solution([1, 3, 2], 3))  # "022","202" => "202"
# # print(solution([5, 7, 2, 4, 9], 20))
# print(solution([4, 2, 2, 1, 4], 1))

from collections import deque
from copy import copy


def solution2(stones, k):
    queue = deque()
    queue.append((stones, ""))
    visited = set()
    initial_stones = ''.join([str(s) for s in stones])
    visited.add((initial_stones, ""))
    paths = []
    while len(queue) > 0:
        cur_stones, path = queue.popleft()
        if cur_stones.count(0) == len(stones) - 1 and sum(cur_stones) == k:
            paths.append(path)
            continue

        for picked_idx in range(len(cur_stones)):
            changed_stones = copy(cur_stones)
            changed_stones[picked_idx] += 1
            if 0 in changed_stones:
                continue

            changed_stones = [s - 1 for s in changed_stones]
            changed_stones[picked_idx] += 1
            string_stones = ''.join([str(s) for s in changed_stones])
            if (string_stones, path + str(picked_idx)) in visited:
                continue

            visited.add(string_stones)
            queue.append((changed_stones, path + str(picked_idx)))

    if len(paths) > 0:
        return paths[-1]
    else:
        return "-1"


# print(solution([1, 3, 2], 3))  # "022","202" => "202"
# print(solution([5, 7, 2, 4, 9], 20))
print(solution2([4, 2, 2, 1, 4], 1))
# 10/ 21
