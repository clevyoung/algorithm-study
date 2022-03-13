# matrix = [[1,2,3],[4,5,6],[7,8,9],["*",0,"#"]]
matrix_map = {
    1:[0,0],
    2:[0,1],
    3:[0,2],
    4:[1,0],
    5:[1,1],
    6:[1,2],
    7:[2,0],
    8:[2,1],
    9:[2,2],
    "*":[3,0],
    0:[3,1],
    "#":[3,2]
}

def solution(numbers, hand):
    answer = ''
    left_thumb = matrix_map["*"]
    right_thumb = matrix_map["#"]
    for number in numbers:
        # 내가 누르는 number가 0번째 열에 있는 경우          
        if matrix_map[number][1] == 0:
            left_thumb = matrix_map[number]
            answer += "L"
            
        # 내가 누르는 number가 2번째 열에 있는 경우
        elif matrix_map[number][1] == 2:
            right_thumb = matrix_map[number]
            answer += "R"
            
        # 내가 누르는 number가 1번째 열에 있는 경우
        else:
            # 현재 왼쪽 엄지의 위치와 누르는 number와의 거리
            left_thumb_distance = abs(matrix_map[number][0] - left_thumb[0]) + abs(matrix_map[number][1] - left_thumb[1])
            # 현재 오른쪽 엄지의 위치와 누르는 number와의 거리
            right_thumb_distance = abs(matrix_map[number][0] - right_thumb[0]) + abs(matrix_map[number][1] - right_thumb[1])
            
            # 왼쪽 엄지가 number와 가까이 있는 경우
            if left_thumb_distance < right_thumb_distance:
                left_thumb = matrix_map[number]
                answer += "L"
                
            # 오른쪽 엄지가 number와 가까이 있는 경우
            elif left_thumb_distance > right_thumb_distance:
                right_thumb = matrix_map[number]
                answer += "R"
            
            # 왼쪽엄지, 오른쪽엄지가 number와 거리가 같은 경우
            else:
                # 왼손잡이라면 왼쪽으로 누르기
                if hand == "left":
                    left_thumb = matrix_map[number]
                    answer += "L"
                    
                # 오른손잡이라면 오른쪽으로 누르기
                else:
                    right_thumb = matrix_map[number]
                    answer += "R"            
    
    return answer


print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))


