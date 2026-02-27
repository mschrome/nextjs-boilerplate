require 'json'

Handler = Proc.new do |request, response|
  response.status = 200
  response['Content-Type'] = 'application/json; charset=utf-8'
  response['Cache-Control'] = 'no-store'

  response.body = JSON.generate({
    ok: true,
    runtime: 'ruby',
    rubyVersion: RUBY_VERSION,
    path: request.path
  })
end
