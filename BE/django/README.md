# 북적북적 Backend 표지 추천 시스템 파트(Django)

## 디렉토리 설명

recommend-bookcover
ㄴ settings
urls
bookcover
ㄴ model
serializer
urls
models
ㄴmodel\*p1 _(keras 모델 디렉토리)_
csv \_(표지 유사도 추천 테이블)\_
Docker (recommend 프로젝트 도커 이미지 파일)
manage.py

recommend-service
ㄴ basic_recom
ㄴ book_recom

## 이미지 추천 시스템 구조

- 1차로 이미지 종류를 분류한 다음, 2차로 동일 카테고리 내에서 유사도가 가장 높은 20개의 이미지 URL 반환
  - 이미지 종류 분류(1차)는 static/model_p1 모델 사용(load_model 시 폴더 째로 불러오기)
  - 이미지 유사도 분류(2차)는 scikit-image의 SSIM(Structural Similarity) 알고리즘 사용
  - 이미지 데이터 읽기 및 전처리는 cv2를 사용하였고, 색채 유사성 패턴을 고려하여 컬러 이미지로 처리했습니다.

## 사용한 기술 스택 버전(환경설정)

- Django : 4.0
- python : 3.10
- CUDA : 11.7
- tensorflow==2.12.0
- keras==2.12.0
- ~~yolov5 모델 사용~~ **(현재 사용하지 않음)**
- Django REST Framework : 3.14.0
- ipython : 8.11.0
- OpenCV : 4.7.0.72
- Pillow : 9.3.0

yolov5, pytorch는 더 이상 사용하지 않습니다.

## 배포 환경에서 변경해야 할 점

### settings.py

- ALLOWED_HOSTS : Spring과 DB의 PORT 번호(또는 IP 주소) 입력
- DATABASES : 배포 환경 DB의 접속 정보 입력
