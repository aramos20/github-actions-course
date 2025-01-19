FROM python:alpine3.19 AS base
WORKDIR /app
COPY requirements.txt .
# Instalar herramientas de compilación esenciales para paquetes como numpy
RUN apk add --no-cache gcc g++ make musl-dev python3-dev libffi-dev openssl-dev py3-distutils
RUN python -V
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD [ "python", "/app/main.py" ]