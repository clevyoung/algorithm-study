# 전구
def solution(n, k, bulbs):
    light_map = {
        "R": 0,
        "G": 1,
        "B": 2
    }
    count = 0
    bulbs = [light_map[b] for b in bulbs]
    count = 0
    for i in range(len(bulbs)):
        if len(bulbs[i:i+k]) < k:
            break
        for j in range(3):
            if bulbs[i] == 0:
                break

            for r in range(i, i+k):
                bulbs[r] = (bulbs[r] + 1) % 3
            count += 1

    if sum(bulbs) == 0:
        return count
    else:
        return -1


# print(solution(6, 3, "RBGRGB"))  # 3
print(solution(3, 2, "BGG"))  # -1
# 6	3	"RBGRGB"	3
# 3	2	"BGG"	-1
# 4	2	"GBBG"	6
# 24 / 32
