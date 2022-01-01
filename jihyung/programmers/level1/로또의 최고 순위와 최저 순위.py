def solution(lottos, win_nums):
    rank = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6
    }
    not_shown_count = lottos.count(0)
    left_win_nums = list(set(win_nums) - set(lottos))
    if not_shown_count == 6:
        return [1, 6]
    elif left_win_nums == []:
        return [1, 1]

    min_win = rank[len(win_nums) - len(left_win_nums)]
    max_win = rank[len(win_nums) - len(left_win_nums) + not_shown_count]
    return [max_win, min_win]


print(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))  # [3, 5]
