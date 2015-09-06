class AddVideoUrlToFilms < ActiveRecord::Migration
  def change
  	remove_column :films, :code_embed
  	add_column :films, :video_url, :string
  end
end
