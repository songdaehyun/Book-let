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

# 3. 이미지 분류하기

- 오픈소스 모델(YOLOv5)을 사용한다.

# 환경설정

- 이미지 원본, 이미지 라벨링 데이터(YOLO 등으로 만든 텍스트 파일), 분류 속성(종류) 정보가 필요하다.

## pyyaml

- yaml은 python처럼 작성하는 텍스트 파일이다.
- yaml을 이용하면 이미지 원본 주소, 라벨링 데이터 주소, 분류 속성 등을 저장한 뒤 python에서 불러올 수 있다.

1. pyyaml 설치

```
pip install pyyaml
```

2. .yaml 파일 읽기/쓰기

```py
import yaml

# with open(파일경로) as f
with open('C:/Users/SSAFY/LabeledSample/data.yaml') as f:
    # yaml.load(파일경로, Loader=yaml.FullLoader)
    bookcovers = yaml.load(f, Loader=yaml.FullLoader)
```

## ultralytics yolov

- YOLO로 만든 레이블을 이용한 분류 모델을 만드려면 ultralytics yolov를 사용해야 한다.
  - 배포 버전은 5, 6, 7, 8(최신) 이 있다.

### 설치 순서

1. ultralytics 설치

```
pip install ultralytics
```

2. yolov5 github(https://github.com/ultralytics/yolov5) 저장소 클론

3. 복제한 저장소의 requirements.txt 설치

```
pip install -r requirements.txt
```

### 데이터 디렉토리 설정

- 메인 디렉토리를 기준으로 이미지 디렉토리와 레이블 디렉토리가 같은 레벨에 위치해야 한다.
- 이미지와 레이블, 훈련용과 테스트용(검증용) 데어터는 이진 트리 형식으로 배치되어야 한다.

```
Data
ㄴimages
|   |- train
|   ㄴ val
ㄴlabels
    |- train
    ㄴ val
```

## 모델 훈련

### 파라미터 입력

> - 이하 코드들은 clone한 yolo5 디렉토리에서 실행한다.

1. 이미지 크기 지정

- 이미지의 크기를 재조정(resize)한다. 640의 배수 값으로 입력하면 된다.
- 이미지가 클수록 정확도가 올라가지만 연산 속도가 감소한다(시간이 오래 걸린다).

2. batch 크기 지정

- batch(분리된 데이터 셋)의 표본 데이터 크기를 설정한다.
- 데이터를 여러 iteratinon 동안 나누어 줄 때 한 iteration에 주는 데이터의 크기가 batch의 크기이다.

3. epoch 지정

- 학습 반복 횟수를 설정한다.
- 너무 적으면 정확도가 떨어지고, 너무 많으면 과적합(overfitting) 현상이 발생할 수 있다.

4. yaml 파일 경로 지정

- 데이터 원본 디렉토리에 작성한 .yaml 파일의 경로를 입력한다.

5. pretained weights 설정

- YOLO에서 제공하는 모델 중 어떤 모델을 사용할지 결정한다.
- 가벼운 모델부터 고성능 모델까지 다양한 바리에이션이 있다.
  - yolov5n, yolov5x, yolov5n6, yolov5l6 등등...
- 모델 .pt 파일이 없는 경우 다운로드 작업이 추가로 진행된다.

6. 학습 완료 파일 및 성능 기록 저장 위치

- 학습 후 weight 파일과 모델 성능 평가 데이터 저장 위치를 설정한다.
- --project는 상위 폴더, --name은 파일을 저장할 하위 폴더이다.
- --name을 설정하지 않으면 exp라는 이름의 폴더가 생성된다.
- 파일 위치를 설정할 때 마지막에 --exist-ok를 적어주지 않으면 코드를 실행할 때마다 새로운 파일이 생성된다.

  - --exist-ok를 설정하면 동일한 이름을 가진 최신 파일이 기존 파일을 덮어쓴다.

- 파일은 최고 성능(best.pt), 마지막 성능(last.pt)가 저장된다.

### 코드 예시

```
!cd yolo5; python train.py --img 1280 --batch 8 -- epochs 100 -- data C:\Users\SSAFY\LabeledSample\data.yaml --weights yolov5x.pt --project ../ultra_workdir3 --name defects --exist-ok
```

# 환경설정 정보(버전 정보)

- 사용 모델 : YOLOv5(yolov5l)
- 시스템 : CUDA GPU(NVIDIA GeForce RTX 3050 Ti Laptop GPU, 4096MiB)

# 모델 파라미터 설정 정보

- batch : 2
- 이미지 사이즈 : 640
- epochs : 20
