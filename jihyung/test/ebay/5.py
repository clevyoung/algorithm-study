# 펠린드론
from copy import copy
from collections import deque


def solution(pairs):
    visited = set()
    queue = deque()
    answers = []
    for i in range(1, len(pairs)):
        if list(reversed(pairs[0] + pairs[i])) == list(pairs[0] + pairs[i]) or list(reversed(pairs[i] + pairs[0])) == list(pairs[i] + pairs[0]):
            copied_pairs = copy(pairs)
            copied_pairs.pop(i)
            copied_pairs.pop(0)
            queue.append((copied_pairs, pairs[i]))

    while len(queue) > 0:
        cur_pairs, answer = queue.popleft()
        if len(cur_pairs) == 0:
            answers.append(answer)
        for i in range(0, len(cur_pairs)):
            for j in range(i+1, len(cur_pairs)):
                if ''.join(list(reversed(cur_pairs[i] + cur_pairs[j]))) == ''.join(list(cur_pairs[i] + cur_pairs[j])) or ''.join(list(reversed(cur_pairs[j] + cur_pairs[i]))) == ''.join(list(cur_pairs[j] + cur_pairs[i])):
                    copied_pairs = copy(cur_pairs)
                    copied_pairs.pop(j)
                    copied_pairs.pop(i)
                    queue.append((copied_pairs, answer))

    return answers


# print(solution(["11", "111", "11", "211"]))  # ["111","211"]
print(solution(["21", "123", "111", "11"]))  # ["123"]


6 / 11
시간초과 2
