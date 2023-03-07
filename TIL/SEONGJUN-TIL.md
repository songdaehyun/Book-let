# yes24 영화 리뷰 크롤링
```python
import time
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

# keyword = input('회사명 : ')

chrome_options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

driver.get(f'http://www.yes24.com/Product/Goods/115142458')


print('#'*100)

book_name = driver.find_element(By.CLASS_NAME, 'gd_name').text
print('도서명 : ', book_name)

book_rate = driver.find_element(By.CLASS_NAME, 'yes_b').text
print('전체 평점 : ', book_rate)

book_isbm = driver.find_element(By.XPATH, '//*[@id="infoset_specific"]/div[2]/div/table/tbody/tr[3]/td').text
print('ISBM13 : ', book_isbm)

book_rate_ages = driver.find_elements(By.XPATH, '//*[@id="ageChart"]/ul')
for book_rate_age in book_rate_ages:
    print(book_rate_age.text.split('\n'))

print('#'*100)

reviews = driver.find_elements(By.CLASS_NAME, 'reviewInfoGrp.lnkExtend')
for review in reviews:
    # 아이디
    try:
        if "YES마니아" in review.text.split('|')[1].strip():
            print(review.text.split('|')[1].strip().split(" ")[-1])
        else:
            print(review.text.split('|')[1].strip())
    except:
        pass

    # 내용 별점
    print(review.text.split('|')[0].strip().split("평점")[1][0])
    
    # 디자인 별점
    print(review.text.split('|')[0].strip().split("평점")[-1][0])

    # 타이틀
    print(review.text.split('\n')[0])

    # 내용
    print(review.text.split('\n'))

    # # 시간
    # print(review.text.split('\n')[1])

time.sleep(2)
```

# 감성점수
## 감성점수 제목별 분류
- [결과](https://www.notion.so/f94033d6d62f4be68ce50c049cb1bef9)
```python
import json
import pandas as pd
import os
import shutil
import csv

DATA_DIR = "./data"
DATA_FILE = os.path.join(DATA_DIR, "NL_BO_SENSE_202012.csv")
DUMP_FILE = os.path.join(DATA_DIR, "dump.pkl")

base_titles = []


def import_data(data_path=DATA_FILE):
    """
    Req. 1-1-1 음식점 데이터 파일을 읽어서 Pandas DataFrame 형태로 저장합니다
    """

    try:
        with open(data_path, 'rt', encoding="UTF8") as f:
            reader = csv.reader(f)

            stores = dict()  # {키워드 : [긍정, 부정], ... }
            print(reader)
            for d in reader:

                # 긍정 부정 점수
                rates = []
                rates.append(d[2])
                rates.append(d[3])
                # 저장소에 저장 딕셔너리로 추가
                stores[d[1]] = rates

            f.closed
            
            return stores

    except FileNotFoundError as e:
        print(f"`{data_path}` 가 존재하지 않습니다.")
        exit(1)


def check(title, scores):
    title_lst = title.split()
    positive_score = []
    negative_score = []
    for title_factor in title_lst:
        if len(title_factor) > 1 and title_factor[-1] in "은는이가의":
            # print("변경")
            title_factor = title_factor[:len(title_factor)-1]

        try:
            # print("점수측정")
            # print("스코어!!!!!!!!!! : ", scores[title_factor])
            positive_score.append(float(scores[title_factor][0]))
            negative_score.append(float(scores[title_factor][1]))
        except:
            # print("오류")
            continue
            
    total_positive_score = sum(positive_score)
    total_negative_score = sum(negative_score)
    
    score = max(total_positive_score, total_negative_score)

    return title, score


def get_title():
    # for _ in range(1):
    #     i = '02'
    for i in range(3, 13):
        if i == 9:
            continue
        if i < 10:
            i = '0' + str(i)
        else:
            i = str(i)
        
        FILE = os.path.join(DATA_DIR, f'NL_BO_BEST_BOOK_HISTORY_ARCHIVE_2021{i}.csv')
        try:
            with open(FILE, 'rt', encoding="UTF8") as f:
                reader = csv.reader(f)
                for r in reader:
                    base_titles.append(r[5])
                # title만 뽑자
                # f.closed


        except FileNotFoundError as e:
            print(f"`{FILE}` 가 존재하지 않습니다.")
            exit(1)

def main():

    data = import_data()

    get_title()

    results = dict()
    for title in base_titles:
        # print("작업중인 도서 : ", title)
        book, score = check(title, data)
        results[book] = score
    
    check()


    # new_dict = dict(results.items(), key=lambda x:x[1])
    # # for i in new_dict.items():
    # #     print(i)

    # f = open('write.csv','w', newline='', encoding='UTF8')
    # wr = csv.writer(f)
    # i = 0
    # for final_title, final_rate in new_dict.items():
    #     i += 1
    #     wr.writerow([i,final_title, final_rate])
    
    f.close()


if __name__ == "__main__":
    main()
```

## 감성점수(요약)
- [결과](https://www.notion.so/f94033d6d62f4be68ce50c049cb1bef9)
```python
import json
import pandas as pd
import os
import shutil
import csv

DATA_DIR = "./data"
DATA_FILE = os.path.join(DATA_DIR, "NL_BO_SENSE_202012.csv")
DUMP_FILE = os.path.join(DATA_DIR, "dump.pkl")

base_titles = []
base_contents = []


def import_data(data_path=DATA_FILE):
    """
    Req. 1-1-1 음식점 데이터 파일을 읽어서 Pandas DataFrame 형태로 저장합니다
    """

    try:
        with open(data_path, 'rt', encoding="UTF8") as f:
            reader = csv.reader(f)

            stores = dict()  # {키워드 : [긍정, 부정], ... }
            print(reader)
            for d in reader:
                # 긍정 부정 점수
                rates = []
                rates.append(d[2])
                rates.append(d[3])
                # 저장소에 저장 딕셔너리로 추가
                stores[d[1]] = rates

            f.closed
            
            return stores

    except FileNotFoundError as e:
        print(f"`{data_path}` 가 존재하지 않습니다.")
        exit(1)


def check(content, scores):
    content_lst = content.split()
    positive_score = []
    negative_score = []
    for content_factor in content_lst:
        if len(content_factor) > 1 and content_factor[-1] in "은는이가의":
            # print("변경")
            content_factor = content_factor[:len(content_factor)-1]
        try:
            # print("점수측정")
            # print("스코어!!!!!!!!!! : ", scores[content_factor])
            positive_score.append(float(scores[content_factor][0]))
            negative_score.append(float(scores[content_factor][1]))
        except:
            # print("오류")
            continue
            
    total_positive_score = sum(positive_score)
    total_negative_score = sum(negative_score)
    
    score = max(total_positive_score, total_negative_score)
    if total_positive_score >= total_negative_score:
        state = 1
    else:
        state = 0

    return score, state


def get_title():
    # for _ in range(1):
    #     i = '02'
    for i in range(3, 13):
        if i == 9:
            continue
        if i < 10:
            i = '0' + str(i)
        else:
            i = str(i)
        
        FILE = os.path.join(DATA_DIR, f'NL_BO_BEST_BOOK_HISTORY_ARCHIVE_2021{i}.csv')
        try:
            with open(FILE, 'rt', encoding="UTF8") as f:
                reader = csv.reader(f)
                for r in reader:
                    base_titles.append(r[5])
                # title만 뽑자
                # f.closed


        except FileNotFoundError as e:
            print(f"`{FILE}` 가 존재하지 않습니다.")
            exit(1)


def get_detail():
    # for _ in range(1):
    #     i = '02'
    for i in range(3, 13):
        if i == 9:
            continue
        if i < 10:
            i = '0' + str(i)
        else:
            i = str(i)
        
        FILE = os.path.join(DATA_DIR, f'NL_BO_BEST_BOOK_HISTORY_ARCHIVE_2021{i}.csv')
        try:
            with open(FILE, 'rt', encoding="UTF8") as f:
                reader = csv.reader(f)
                for r in reader:
                    base_contents.append((r[5], r[7]))


        except FileNotFoundError as e:
            print(f"`{FILE}` 가 존재하지 않습니다.")
            exit(1)


def main():
    data = import_data()
    get_detail()

    results = list()
    for content in base_contents:
        score, state = check(content[1], data)
        if score == 0:
            continue
        results.append((content[0], content[1], score, state))

    results.sort(key=lambda x:(x[3], x[2]))
    # print(results)

    f = open('write.csv','w', newline='', encoding='UTF8')
    wr = csv.writer(f)
    i = 0
    for final_title, final_content, final_rate, final_state in results:
        i += 1
        if final_state == 1:
            final_state = "P"
        else:
            final_state = "N"
        wr.writerow([i, final_state, final_rate, final_title, final_content])
    
    f.close()


# def main():

#     data = import_data()

#     get_title()

#     results = dict()
#     for title in base_titles:
#         # print("작업중인 도서 : ", title)
#         book, score = check(title, data)
#         results[book] = score
    
#     # check()


#     new_dict = dict(results.items(), key=lambda x:x[1])
#     # for i in new_dict.items():
#     #     print(i)

#     f = open('write.csv','w', newline='', encoding='UTF8')
#     wr = csv.writer(f)
#     i = 0
#     for final_title, final_rate in new_dict.items():
#         i += 1
#         wr.writerow([i,final_title, final_rate])
    
#     f.close()


if __name__ == "__main__":
    main()
```

# Deep Learning
# 인공지능 Dataset 공유 : AI Hub
# Teachable Machine
- [링크](https://teachablemachine.withgoogle.com)

# TensorFlow.js
- [링크](https://www.tensorflow.org/js)


