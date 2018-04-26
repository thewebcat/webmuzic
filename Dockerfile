FROM python:3.6

ENV PYTHONUNBUFFERED 1

RUN mkdir -p /srv/app/public_static/
WORKDIR /srv/app

COPY requirements.txt /srv/app/
RUN pip install -r requirements.txt

CMD ["./manage.py", "runserver", "0.0.0.0:8000", "--insecure"]