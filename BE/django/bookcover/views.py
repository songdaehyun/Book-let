from django.shortcuts import render
import torch
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# .pt로 저장된 모델 불러오기
model = torch.load('../model/test300.pt')
model.eval()


@csrf_exempt
def image_recommend(request):   # 예측 기능 수행
    if request.method == 'POST':
        # Get input data from POST request
        input_data = request.POST.get('input_data')

        # Prepare the input data for the model
        # ...

        # Pass the input data to the model
        output = model(input_data)

        # Format the output as JSON
        response = {'output': output.tolist()}

        # Return the response as a JSON object
        return JsonResponse(response)
