## Test task to the gate team (full-stack)
---

###Start:
 
**docker-compose:**

```docker-compose up -d --build```

By default the service will launched on [http://localhost:8888]("http://localhost:8888")

**Local dev**

Frontend:
```
cd frontend
yarn install && yarn dev
```

Backend:
```
cd backend
pip install pipenv
pipenv install
FLASK_APP=app.py flask run
```

By default the service will launched on [http://localhost:8080]("http://localhost:8080")
