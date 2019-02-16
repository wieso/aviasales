FROM python:3-alpine

COPY . /app
WORKDIR /app
VOLUME /app

RUN apk update \
 && apk add --virtual build-deps gcc python3-dev musl-dev \
 && apk add postgresql-dev \
 && pip install --upgrade pip \
 && pip install pipenv \
 && pipenv install --system --deploy \
 && apk del build-deps

EXPOSE 80
CMD gunicorn --bind 0.0.0.0:80 app:app