def solution(participant, completion):
    # 완주자의 이름과 수를 저장함
    completion_participant_count = {}
    for runner in completion:
        if runner not in completion_participant_count:
            completion_participant_count[runner] = 1
        else:
            completion_participant_count[runner] += 1

    for runner in participant:
        # 주자가 완주자목록에 들어있고 주자의 수가 1이상이면 ok
        if runner in completion_participant_count and completion_participant_count[runner] >= 1:
            completion_participant_count[runner] -= 1

        # 아닐경우 완주하지 못한 주자입니다.
        else:
            return runner


print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))  # "leo"
