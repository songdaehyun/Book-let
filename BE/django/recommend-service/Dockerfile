# configuration source: https://hub.docker.com/r/theeluwin/ubuntu-konlpy/dockerfile
# basing on ubuntu OS
FROM python:3.8.10
FROM ubuntu:latest


# apt init
ENV LANG=C.UTF-8
ENV TZ=Asia/Seoul
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
    apt-get install -y --no-install-recommends tzdata g++ git curl

# installing java jdk and java jre
RUN apt-get install -y default-jdk default-jre

# installing python3 and pip3
RUN apt-get install -y python3-pip python3-dev

RUN pip install mysql-connector



RUN cd /usr/local/bin && \
    ln -s /usr/bin/python3 python && \
    ln -s /usr/bin/pip3 pip && \
    pip3 install --upgrade pip

# apt cleanse
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# timezone
RUN ln -sf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app



# install konlpy dependencies: jpype, konlpy, with mecab module
RUN pip install jpype1-py3 konlpy
RUN cd /workspace && \
    curl -s https://raw.githubusercontent.com/konlpy/konlpy/master/scripts/mecab.sh | bash -s

# getting environment variable on console
ENV PYTHONNUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# WSGIPath settings and DJANGO_SETTINGS_MODULE for deployment
ENV WSGIPath config/wsgi.py
ENV DJANGO_SETTINGS_MODULE config.settings

# copying local file into container's /code/ directory
COPY requirements.txt ./
# python & Django configuration
RUN apt-get install -y python3-pip
RUN pip install --upgrade pip
RUN pip install pip==21.3.1

RUN pip install -r /requirements.txt

# apt cleanse
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# copying the rest of the files into container's /code/ directory
# container's working directory is /code/
COPY . /code/
WORKDIR /code/

#Exposing port to 8000
EXPOSE 8083

# CMD multiple commands using start.sh file
ADD start.sh /
RUN chmod +x /start.sh

CMD ["/start.sh"]