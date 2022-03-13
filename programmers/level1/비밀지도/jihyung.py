def solution(map_size, first_secret_map, second_secret_map):
    first_map = []
    second_map = []

    # 첫번째 십진수로된 맵을 2진수로 바꿔서 지도를 만듦
    for row in first_secret_map:
        # 1. bin함수를 통해 0b011등의 형태로 변경
        # 2. bin함수를 통해 str로 만들어진 2진수의 b를 제거함
        # 3. 맨앞의 0은 무조건 들어가기때문에 이를 삭제하고 rjust 통해 최대 map_size만큼 왼쪽에 0을 채워준다
        one_row = bin(row)[2:].rjust(map_size, '0')
        first_map.append(list(one_row))

    # 두번째 십진수로된 맵을 2진수로 바꿔서 지도를 만듦
    for row in second_secret_map:
        one_row = bin(row)[2:].rjust(map_size, '0')
        second_map.append(list(one_row))

    # 만들어진 두맵을 동시에 비교하면서 각 지점의 합이 1이상이면 둘중한개는 벽이기 때문에 #을 추가하고
    # 그렇지 않은 경우는 둘다 비어있는 경우이기 때문에 ' ' 공백을 추가합니다.
    decoded_map = []
    for i in range(len(first_map)):
        one_row = ""
        for j in range(len(first_map[0])):
            if int(first_map[i][j]) + int(second_map[i][j]) >= 1:
                one_row += "#"
            else:
                one_row += " "
        decoded_map.append(one_row)

    return decoded_map


print(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
# ["#####","# # #", "### #", "# ##", "#####"]
