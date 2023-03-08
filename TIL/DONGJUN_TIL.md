# 2022-03-08

# 1. Python으로 이미지 데이터 불러오기 및 저장

## OpenCV 활용

### 환경설정

- opencv-python 설치가 필요하다.

```
pip install opencv-python
```

- 이후 cv2라는 이름으로 불러온다.

```py
import cv2
import numpy as np
```

### 이미지 읽기

- cv2.imread(filename, flag)
- filename은 이미지 파일 경로, flag는 읽기 시 옵션 설정

```py
# cv2.IMREAD_COLOR로 설정하면 이미지를 컬러로 읽고, 투명한 부분은 무시한다.
img = cv2.imread('test.jpg' cv2.IMREAD_COLOR)
```

- PIL.Image.open(filename)도 가능하다.
- filename은 glob 형태로 저장된 파일 저장 경로이다.

```py
import PIL

roses = list(data_dir.glob('roses/*'))
PIL.Image.open(str(roses[0]))

# 외부 URL에서 이미지를 가져오는 경우
from io import BytesIO
import requests

path = "https://bookthumb-phinf.pstatic.net/cover/147/218/14721849.jpg?type=m1&udate=20190817"
res = requests.get(path)
request_get_img = Image.open(BytesIO(res.content))
```

### 이미지 파일의 모양

- image.shape

### 불러온 이미지 보기

- cv2.imshow(title, image)
- title은 외부 창의 제목, image는 imread로 읽어온 이미지 데이터 입력

### 이미지 저장하기

- Image.save()

```py
# 이미지를 현재 작업하고 있는 디렉토리의 상대 경로에 저장
request_get_img = request_get_img.save("test.jpg")

# 저장된 이미지 오픈하기
open_local = Image.open("./test.jpg")   # open_local을 실행하면 이미지가 출력된다.
```

<hr>

# 2. 이미지 라벨링

## 이미지 라벨링

- 이미지 비교 및 분석 시 정확도를 높이려면 이미지를 구성하는 요소마다 구역을 나눠 줄 필요가 있다.(라벨링)
- 라벨링은 별도의 프로그램(YOLO 등)을 통해 진행한다.

## YOLO 환경설정

### 1. YOLO 다운로드

- https://github.com/heartexlabs/labelImg 의 Releases(오른쪽 메뉴)에 공개된 압축 파일을 다운받는다.
- 다운 받은 파일은 압축을 해제한 뒤 루트 드라이브(C, D 등)의 바로 아래로 옮긴다.

### 2. labelImg.exe 실행

- 실행 시 명령 프롬포트와 라벨링 작업 앱이 작동한다.
- 명령 프롬포트 콘솔을 종료하면 라벨링 앱도 같이 종료된다.

### 3. 클래스(class) 정의

- data 폴더의 predefined_classes에서 분류 기준을 임의로 설정할 수 있다.
