import http.server

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler

httpd = http.server.HTTPServer(("", PORT), Handler)
print("serving at port", PORT)
httpd.serve_forever()
