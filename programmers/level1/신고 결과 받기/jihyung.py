def solution(attack_ids, reports, k):
    reports = list(set(reports))
    reports_map = {}
    deffenses_map = {}
    for report in reports:
        attack, deffense = report.split()
        if attack not in reports_map:
            reports_map[attack] = []
        reports_map[attack].append(deffense)

        if deffense not in deffenses_map:
            deffenses_map[deffense] = 0
        deffenses_map[deffense] += 1

    answers = []
    for attack_id in attack_ids:
        if attack_id not in reports_map:
            answers.append(0)
            continue

        my_attack_success_count = 0
        for target_id in reports_map[attack_id]:
            if deffenses_map[target_id] >= k:
                my_attack_success_count += 1
        answers.append(my_attack_success_count)

    return answers


print(solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2))  # [2,1,1,0]

print(solution(
    ["con", "ryan"],
    ["ryan con", "ryan con", "ryan con", "ryan con"], 3))  # [0, 0]
