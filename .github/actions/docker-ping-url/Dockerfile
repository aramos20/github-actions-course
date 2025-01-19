FROM python:alpine3.19 AS base

# Configurar el directorio de trabajo
WORKDIR /app

# Copiar las dependencias
COPY requirements.txt .

# Instalar herramientas de compilación necesarias para paquetes como numpy y OpenCV
RUN apk add --no-cache \
  gcc g++ make musl-dev python3-dev libffi-dev openssl-dev \
  cmake jpeg-dev zlib-dev freetype-dev tiff-dev libpng-dev openblas-dev py3-setuptools

# Verificar la versión de Python
RUN python -V

# Instalar dependencias de Python
RUN pip install --no-cache-dir --upgrade pip setuptools wheel
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del código fuente
COPY . .

# Comando de ejecución del contenedor
CMD ["python", "/app/main.py"]
