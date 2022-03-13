def solution(sizes):
    # 리스트안의 리스트도 큰값이 앞으로 오도록 정렬
    new_sizes = []
    for size in sizes:
        if size[0] > size[1]:
            new_sizes.append([size[0], size[1]])
        else:
            new_sizes.append([size[1], size[0]])
    sizes = new_sizes

    # 리스트 전체를 0번째 항으로 내림차순 정렬
    sizes.sort(key=lambda x: -x[0])

    max_width = sizes[0][0]
    max_height = sizes[0][1]
    cur_height = -1

    for i in range(1, len(sizes)):
        if sizes[i][0] > sizes[i][1]:
            cur_height = sizes[i][1]

        else:
            cur_height = sizes[i][0]

        if max_height < cur_height:
            max_height = cur_height

    return max_width * max_height


print(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))  # 4000
