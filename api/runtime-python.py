from http.server import BaseHTTPRequestHandler
import json
import platform


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        body = {
            "ok": True,
            "runtime": "python",
            "pythonVersion": platform.python_version(),
            "path": self.path,
        }

        payload = json.dumps(body).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(payload)
