# 북적북적 Backend 추천 시스템 파트(Django)

## 디렉토리 설명

recommend
ㄴ settings
urls
bookcover
ㄴ model
serializer
urls
static
ㄴtest300.pt _(pytorch 모델)_
csv _(표지 유사도 추천 테이블)_

manage.py

## 사용한 기술 스택 버전(환경설정)

- Django : 4.0
- python : 3.10

  - pytorch, yolov5, cuda와의 호환성을 위해 3.10 사용

- CUDA : 11.7
- pytorch(torch) : Stable(1.13.1)
- yolov5 : 7.0.9
- tensorflow==2.12.0
- keras==2.12.0

- ~~yolov5 모델 사용~~ **(현재 사용하지 않음)**

- Django REST Framework : 3.14.0
- ipython : 8.11.0
- OpenCV : 4.7.0.72
- Pillow : 9.3.0

## 배포 환경에서 변경해야 할 점

### settings.py

- ALLOWED_HOSTS : Spring과 DB의 포트 번호(IP 주소) 입력
- DATABASES : 배포 환경 DB의 정속 정보 입력
