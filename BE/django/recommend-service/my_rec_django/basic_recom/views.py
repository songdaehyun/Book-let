from rest_framework.response import Response
from rest_framework.decorators import api_view
import os
import re
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer, HashingVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from surprise import Dataset, Reader, KNNWithMeans, KNNBasic
from konlpy.tag import Okt
import json
from django.conf import settings
from django.http.response import JsonResponse, HttpResponse


# Create your views here.


@api_view(['GET'])
def show_all_book(request):

    # 엑셀 파일 경로 지정
    excel_file_path = os.path.join(os.getcwd(),'basic_recom', 'excel', 'df_book.xlsx')
    # 엑셀 파일을 데이터프레임으로 변환
    df = pd.read_excel(excel_file_path)
    book_list = df['isbn'].tolist()
    response_data = json.dumps(book_list)
    return HttpResponse(response_data, content_type='application/json')



@api_view(['POST'])
def like_book(request):
    book = request.data.get('isbn')
    print(book)

    # 엑셀 파일 경로 지정
    excel_file_path = os.path.join(os.getcwd(),'basic_recom', 'excel', 'df_book.xlsx')
    print(excel_file_path)

    # 엑셀 파일을 데이터프레임으로 변환
    df_content = pd.read_excel(excel_file_path) 

    df_content.reset_index(inplace=True, drop=True)
    df_content['index'] = [i for i in range(df_content.shape[0])]

    def content(book_isbn):
    
        book_isbn = int(book_isbn)
        
        index = df_content[df_content['isbn'] == book_isbn]['index'].values[0]
        
        # # 책 소개 전처리
        # okt = Okt()
        # summary_filtered = []
        # for i in df_content['description']:       
        #     i = re.sub("[^ㄱ-ㅎㅏ-ㅣ가-힣]+", " ", i)
        #     i = okt.nouns(i)
        #     i = " ".join(i)
        #     summary_filtered.append(i)

        # print(summary_filtered)
            
        # df_content['description'] = summary_filtered   
        cv = TfidfVectorizer()
        count_matrix = cv.fit_transform(df_content['description'])
        cosine_sim = cosine_similarity(count_matrix)

        sim_books = list(enumerate(cosine_sim[index]))
        sorted_sim_books = sorted(sim_books,key=lambda x:x[1],reverse=True)[1:6]
        return sorted_sim_books
    
    final_result = []
    for i in content(book):
        final_result.append(int(df_content.loc[df_content['index'] == i[0], 'isbn'].iloc[0]))


    a = {'recom_list' : final_result}

    # DRF Response 객체 생성
    return Response(data=a, status=200, content_type='application/json')
    
   

    
@api_view(['POST'])
def star_book(request):

    user = request.data.get('user')

    
    # 엑셀 파일 경로 지정
    excel_file_path = os.path.join(os.getcwd(),'basic_recom', 'excel', 'df_star.xlsx')
    # 엑셀 파일을 데이터프레임으로 변환
    df_star = pd.read_excel(excel_file_path)

    # Surprise 라이브러리에서 사용할 데이터셋 형태로 변환
    reader = Reader(rating_scale=(0.5, 5))
    data = Dataset.load_from_df(df_star[["id", "isbn", "star"]], reader)


    # 유저 기반 협업 필터링 수행
    sim_options = {
        "name": "cosine",
        "user_based": True,  # Compute  similarities between users
    }


    trainingSet = data.build_full_trainset()
    algo = KNNWithMeans(sim_options=sim_options)
    algo.fit(trainingSet)
    
    # #특정 유저가 이미 읽은 책 목록
    filterd_df = df_star.loc[df_star['id'] == user]

    # #유저가 읽지 않은 책 목록
    no_user_read = df_star.loc[~df_star['isbn'].isin(filterd_df['isbn'])]['isbn'].unique()


    #추천 목록
    predictions = []
    for book_id in no_user_read:
        predictions.append((book_id, algo.predict(user, book_id).est))
    
    predictions.sort(key=lambda x: x[1], reverse=True)
    print(predictions[5:10])

    final_result = []
    for i in predictions[5:10]:
        final_result.append(int(i[0]))
    
    a = {'recom_list' : final_result}

    # DRF Response 객체 생성
    return Response(data=a, status=200, content_type='application/json')



@api_view(['POST'])
def category_book(request):

    user_liked_list = list(request.data.get('list'))
    # 엑셀 파일 경로 지정
    print(user_liked_list)
    excel_file_path = os.path.join(os.getcwd(),'basic_recom', 'excel', 'df_book.xlsx')
    # 엑셀 파일을 데이터프레임으로 변환
    df_category = pd.read_excel(excel_file_path)

    df_category.reset_index(inplace=True, drop=True)
    df_category['index'] = [i for i in range(df_category.shape[0])]

    
    def category(user_like_list):
    
        input_categories = ''
        for i in user_like_list:
            category = df_category[df_category['isbn'] == i]['category'].values[0]
            input_categories = input_categories + category
            
        okt = Okt()
        
        input_category = re.sub("[^ㄱ-ㅎㅏ-ㅣ가-힣]+", " ", input_categories)
        input_category = okt.nouns(input_category)
        input_category = " ".join(input_category)
        
        if input_category == '':
            input_category = '카테고리'
        
        cv1 = CountVectorizer(token_pattern=r"(?u)\b\w+\b")
        count_matrix = cv1.fit_transform([input_category])
        words_count = count_matrix.toarray()
        max_index = words_count.argmax()
        user_most_category = cv1.get_feature_names_out()[max_index]
        
        filtered_category = df_category['category'].values.tolist()
        # for i in df_category['category']:
        #     if i != '없음':
        #         i = re.sub("[^ㄱ-ㅎㅏ-ㅣ가-힣]+", " ", i)
        #         i = okt.nouns(i)
        #         i = " ".join(i)
        #     else:
        #         i = '카테고리'
        #     filtered_category.append(i)   
            
        filtered_category.append(input_category)
        cv = CountVectorizer(token_pattern=r"(?u)\b.+?\b")
        count_matrix = cv.fit_transform(filtered_category)
        
        cosine_sim = cosine_similarity(count_matrix)
        sim_books = list(enumerate(cosine_sim[len(cosine_sim) - 1]))
        sorted_sim_books = sorted(sim_books,key=lambda x:(-x[1], -x[0]))[1:6]

        return [user_most_category, sorted_sim_books]

    a = category(user_liked_list)
    main_category = a[0]
    tmp_result = a[1]
    print(main_category)
    print(tmp_result)

    final_result = []
    for i in tmp_result:
        final_result.append(int(df_category.loc[df_category['index'] == i[0], 'isbn'].iloc[0]))
    
    a = {'main_category' : main_category, 'recom_list' :final_result}
    
    # DRF Response 객체 생성
    return Response(data=a, status=200, content_type='application/json')





@api_view(['POST'])
def profile_book(request):

    gender = request.data.get('gender')
    age = request.data.get('age')
    age = (int(age) // 10) * 10

    excel_file_path = os.path.join(os.getcwd(),'basic_recom', 'excel', f'book_{age}_{gender}_data.xlsx')
    df = pd.read_excel(excel_file_path)
    SAMPLE_SIZE = 5
    sample_df = df['isbn13'].sample(n=SAMPLE_SIZE)
    sample_list = sample_df.values.tolist()

    a = {'recom_list': sample_list}
    
    return Response(data=a, status=200, content_type='application/json')

    

