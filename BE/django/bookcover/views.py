from django.shortcuts import render
import torch
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# import yolov5

# .pt로 저장된 모델 불러오기
# 실제 배포 환경에서는 상대 경로로 변경해야 함
modelpath = 'C:/Users/SSAFY/Desktop/S08P22B306/BE/django/static/test300.pt'
model = torch.hub.load('ultralytics/yolov5', 'custom',
                       path=modelpath, force_reload=True)
model.eval()    # 평가(예측) 과정에서 사용하지 않는 레이어 비활성화
# model = yolov5.load(modelpath)


@csrf_exempt    # API를 만드는 경우 csrf 인증을 끄는 게 좋다.(대신 API 키 등의 방식을 사용)
def image_recommend(request):   # 예측 기능 수행
    if request.method == 'POST':
        # Get input data from POST request
        input_data = request.POST.get('input_data')

        # 추천 알고리즘을 바탕으로 비슷한 유사도 가진 삽화 N개 반환

        # Pass the input data to the model
        output = model(input_data)

        # Format the output as JSON
        response = {'output': output}

        # Return the response as a JSON object
        return JsonResponse(response)
