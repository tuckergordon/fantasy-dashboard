from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# The production and localhost URLs
origins = [
    "https://fantasy-fb.vercel.app",
    "https://fantasy-dashboard-git-main-tuckergordons-projects.vercel.app",
    "https://fantasy-dashboard-tuckergordons-projects.vercel.app",
    "http://localhost",
    "http://localhost:5173",
    "http://localhost:4173"
]

# Regex to capture other URLs (e.g. for branches)
# ^https://fantasy-dashboard: Matches the fixed part at the start of the URL.
# (-[a-zA-Z0-9]+)*: Matches any hyphen followed by alphanumeric characters (0 or more times).
# -tuckergordons-projects\.vercel\.app: Matches the fixed ending of the URL.
# /?$: Allows for an optional trailing slash and asserts the end of the URL.
origins_regex = "^https://fantasy-dashboard(-[a-zA-Z0-9]+)*-tuckergordons-projects\.vercel\.app/?$"

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex=origins_regex,
    allow_credentials=True,
    # For now only allowing GET requests
    allow_methods=["GET"]
)

@app.get("/api/")
def hello_fast_api():
    return {"message": "Hello from FastAPI"}