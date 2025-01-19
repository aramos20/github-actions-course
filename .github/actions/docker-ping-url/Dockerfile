FROM python:3.11-slim

# Configurar el directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema necesarias para NumPy y OpenCV
RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential \
  cmake \
  python3-opencv \
  libopencv-dev \
  libglib2.0-0 \
  libsm6 \
  libxext6 \
  libxrender-dev

# Copiar las dependencias
COPY requirements.txt .


# Verificar la versión de Python
RUN python -V

# Instalar dependencias de Python
RUN pip install --no-cache-dir --upgrade pip setuptools wheel
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del código fuente
COPY . .

# Comando de ejecución del contenedor
CMD ["python", "/app/main.py"]
