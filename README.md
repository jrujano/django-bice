
  
## Instalar Virtuealenv

[https://virtualenv.pypa.io/en/latest/](https://virtualenv.pypa.io/en/latest/)

## Crear Virtuealenv

Obtener directorio de instalación de python3

```

which python3

```

Crear el virtualenv (entorno virtual)

```
virtualenv -p /usr/bin/python3 <nombre>
```
moverse el directorio de entorno virtual

```
cd <nombre>
```
Para activar el nuevo ambiente virtual, corre lo siguiente:
```
source bin/activate
```
Deberá clonar el repositorio

```
git clone https://github.com/jrujano/django-bice
```

moverse el directorio de

```
cd django-bice
```

Instalar dependencias python

```
pip install -U pip setuptools
pip install -r requirements.txt
```
Generar estructura de la base de Datos y el usuario SuperAdmin
```
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```
Ejecutar el backend

```
python manage.py runserver
```
Abrir el backend (Admin)visitando `http://localhost:8000/admin`.


Obtener dependencias de node ejecutado el comando yarn

```
yarn
```

al ejecutarlo se iniciara el proceso de instalacion

```

yarn install v1.22.4
[1/4] Resolving packages...
[2/4] Fetching packages...
```

  

## Available Scripts


Para Ejecuta la aplicación en modo de desarrollo. En el directorio del proyecto, debe ejecutar:

  

 
### `yarn start`

  

Abra [http://localhost:3000](http://localhost:3000) to para verlo en el navegador.

 
