import csv

def getStuInfo():
    filename = 'stuInfo.csv'
    stuInfo = []
    with open(filename, 'r') as f:
        reader = csv.reader(f, delimiter=',')
        next(reader)        # skip the header
        for row in reader:
            stuInfo.append(row)
        return stuInfo

def basicAnalyse(info):
    # 序号0,班级1,上线2,专业3,电子邮箱4,是否考研5,是否就业6,
    # 报考院校7,考研院校8,已签约单位名称9,备注10,
    # 政治11,数学12,英语13,物理14,专业15,总分16,报考学校17,是否录取18

    total = len(info) # 总考研人数
    total_work = 0 # 总工作人数
    total_join = 0 # 总考研人数
    up = 0 # 上线人数
    up_percent = 0 # 上线比例
    university_list = [] # 上线大学列表
    university_dict = {} # 大学上线次数
    major_total_dict = { # 学院总人数
        '测控技术与仪器': 0,
        '电子科学与技术': 0,
        '生物医学工程': 0,
        '光电信息科学与工程': 0
    }
    major_up_dict = { # 学院上线次数
        '测控技术与仪器': 0,
        '电子科学与技术': 0,
        '生物医学工程': 0,
        '光电信息科学与工程': 0
    }
    major_percent_dict = { # 学院上线比例
        '测控技术与仪器': 0,
        '电子科学与技术': 0,
        '生物医学工程': 0,
        '光电信息科学与工程': 0
    }


    for stu in info:
        if stu[6] == "是":
            total_work += 1
        if stu[5] == "是":
            total_join += 1
            try:
                major_total_dict[stu[3]] += 1
            except:
                pass
        if stu[2] == "上线":
            up += 1
            university_list.append(stu[17])
            major_up_dict[stu[3]] += 1

    for uni in university_list:
        if uni not in university_dict:
            university_dict[str(uni)] = 1
        else:
            university_dict[str(uni)] += 1

    for major in major_percent_dict:
        percent_int = major_up_dict[major] / major_total_dict[major]
        major_percent_dict[major] = str(percent_int * 100)[:5] + "%"

    up_percent = str((up / total_join) * 100)[:5] + "%"
    print("测光学院总人数：{}".format(total))
    print("工作总人数：{}".format(total_work))
    print("待定总人数：{}".format(total - total_work))
    print("考研总人数：{}".format(total_join))
    print("过线总人数：{}".format(up))
    print("过线比例：{}".format(up_percent))
    print("各专业过线人数：{}".format(major_up_dict))
    print("各专业过线比例：{}".format(major_percent_dict))
    print("大学上线次数：{}".format(university_dict))
    for item in university_dict:
        print("{}value: {}, name: '{}'{},".format('{', university_dict[item], item, '}'))

def main():
    info = getStuInfo()
    basicAnalyse(info)


if __name__ == '__main__':
    main()