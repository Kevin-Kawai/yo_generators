require 'sinatra'
require 'sinatra/reloader' if development?

set :views, settings.root + '/app/views'

get '/' do
  erb :index, locals: { path_name: nil }
end

get '/:path' do
  erb :index, locals: { path_name: params['path'] || nil }
end
